import express, { json, NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import { ExtendedRequest } from "../libs/types/members";
import Errors, { HttpCode } from "../libs/Errors";
import OrderService from "../models/Order.service";
import { OrderInquiry, OrderUpdateInput } from "../libs/types/order";
import { OrderStatus } from "../libs/enums/order.enum";

const orderController: T = {};
const orderService = new OrderService;


orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
try {
    console.log("createOrder");

    const result = await orderService.createOrder(req.member, req.body);


    res.status(HttpCode.CREATED).json(result);
} catch (err) {
     console.log("Error, createOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
}
};


orderController.getMyOrders = async (req: ExtendedRequest, res: Response) => {
try {
    console.log("getMyOrder");

    const { page, limit, orderStatus } = req.query;
    const inquiry: OrderInquiry = {
        limit: Number(limit),
        page: Number(page),
        orderStatus: orderStatus as OrderStatus
    };

    const result = await orderService.getMyOrders(req.member, inquiry);
    
    


    res.status(HttpCode.CREATED).json(result);
} catch (err) {
     console.log("Error, getMyOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
}
};



orderController.updateOrder = async (req: ExtendedRequest, res: Response) => {
try {
    console.log("updateOrder");
    const input: OrderUpdateInput = req.body;
    console.log("input:", input);

    const result = await orderService.updateOrder(req.member, input);


    res.status(HttpCode.CREATED).json(result);
} catch (err) {
     console.log("Error, updateOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standart.code).json(Errors.standart);
}
};



export default  orderController;