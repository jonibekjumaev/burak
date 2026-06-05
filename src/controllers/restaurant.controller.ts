import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import Memberservice from "../models/Member.service";

const restaurantController: T = {};
restaurantController.goHome = ((req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home page");
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


export default restaurantController;