import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import Memberservice from "../models/Member.service";
import { MemberInput } from "../libs/types/members";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = ((req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home page");
        // send | json | redirect | end | render
    } catch (err) {
        console.log("Error, goHome:", err);
    }
}); 

restaurantController.getLogin = ((req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login page");
    } catch (err) {
        console.log("Error, getLogin:", err);
    }
}); 

restaurantController.getSignup = ((req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Sign up page");
    } catch (err) {
        console.log("Error, getSignup:", err);
    }
}); 


restaurantController.processLogin = ((req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE")
    } catch (err) {
        console.log("Error, processLogin:", err);
    }
}); 

restaurantController.processSignup =async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        console.log("body:", req.body);

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new Memberservice();
        const result = await memberService.processSignup(newMember);

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);

    }
}; 



export default restaurantController;