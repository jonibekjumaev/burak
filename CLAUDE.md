# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

"Burak" — a restaurant app backend (Node.js + TypeScript + Express + MongoDB/Mongoose). It serves two separate clients from one server:

- A JSON REST API for the companion SPA frontend at the sibling directory `../burak-react`.
- A server-rendered (EJS) admin panel for the restaurant owner, built into this same repo.

## Commands

```
npm run start:dev   # run with nodemon + ts-node (auto-restart on change) — normal dev workflow
npm run start        # run once with ts-node, no watch
npm run build         # tsc compile to dist/
npm run train         # runs src/train.ts via nodemon+ts-node — separate scratch/seed script, not part of the API
```

There is no real test suite (`npm test` is an unconfigured stub) and no lint script configured.

Required env vars (`.env`, not committed): `PORT`, `MONGO_URL`, `SESSION_SECRET`, `SECRET_TOKEN`.

## Architecture

Request flow: **Router → Controller → Service → Mongoose Schema**. This is a layered/service architecture, not classic MVC — controllers never touch Mongoose directly, they always go through a service class.

**Naming trap:** `src/models/*.service.ts` holds the service (business-logic) layer despite the folder name — e.g. `MemberService`, `ProductService`, `OrderService`, `AuthService`, `ViewService`. The actual Mongoose schemas/models live in `src/schema/*.model.ts`. Don't be misled by the folder name when looking for "the model."

### Two parallel apps in one Express instance (`src/app.ts`)

- `src/router.ts`, mounted at `/` — JSON REST API for the SPA frontend. Auth: JWT stored in a cookie (`accessToken`), verified per-request (stateless).
- `src/router-admin.ts`, mounted at `/admin` — server-rendered EJS admin panel (views in `src/views/`). Auth: `express-session`, backed by MongoDB via `connect-mongodb-session` (session collection in the same DB).

These are independent auth systems with independent code paths in `MemberService` (`login`/`signup` for the SPA vs `processLogin`/`processSignup` for the admin, the latter enforcing a single-restaurant-account rule).

### Auth flow (SPA / JWT)

`memberController.login` → `MemberService.login` (bcrypt compare, blocks `memberStatus: BLOCK`) → `AuthService.createToken` signs a JWT (`SECRET_TOKEN`, expiry = `AUTH_TIMER` hours from `src/libs/config.ts`) → set as the `accessToken` cookie and also returned in the JSON body.

Protected routes use `memberController.verifyAuth` middleware (reads the `accessToken` cookie, `jwt.verify`s it, sets `req.member`). `memberController.retriveAuth` is the optional variant (tries to resolve `req.member` but always calls `next()`) — used on routes that work for both guests and logged-in users, e.g. `GET /product/:id` where a logged-in view increments `productViews` via `ViewService`.

### Admin auth flow (session)

`restaurantController.processLogin` sets `req.session.member`; `restaurantController.verifyRestaurant` middleware requires `req.session.member.memberType === MemberType.RESTAURANT`, otherwise renders an alert+redirect script (not a JSON error, since this is an HTML-serving router). `app.ts` mirrors `req.session.member` into `res.locals.member` so EJS templates can read it.

### Data model (`src/schema/`)

- `Member` — users and the single restaurant-owner account (`memberType`), soft-deleted via `memberStatus` enum rather than hard deletes.
- `Product` — menu items; has a compound uniqueness index intended to cover `{productName, productSize, productVolume}`.
- `Order` / `OrderItem` — order header and line items are separate collections (`OrderItem` referencing both `Order` and `Product` by ObjectId).
- `View` — tracks which member has viewed which entity, used to gate view-count increments to once per member.

Enums for all status/type fields live in `src/libs/enums/`, matching TS interfaces in `src/libs/types/`.

### Uploads

`multer`, configured via a disk-storage factory in `src/libs/utils/uploader.ts` (`uploader("members")`, `uploader("products")`), writes to `uploads/<members|products>/` with UUID-randomized filenames. These are served statically and referenced by the frontend as `${serverApi}/${imagePath}`.

### Error handling

`src/libs/Errors.ts` defines a custom `Errors` class plus `HttpCode`/`Message` enums — controllers throw/catch this consistently instead of ad hoc error objects; follow this convention when adding new endpoints.
