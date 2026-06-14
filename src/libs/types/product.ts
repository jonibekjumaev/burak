
import { ObjectId } from "mongoose";
import {
    ProductCollection,
    ProductSize,
    ProductStatus
} from "../enums/product.enum";


export interface Product {
    _id: ObjectId;
    productSTatus: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    productPrice: number;
    productLeftCount: number;
    productSize: ProductSize;
    productVolume: number;
    productDesc?: string;
    productImage: string[];
    productView: number;
}


export interface ProductInput {
    productSTatus?: ProductStatus;
    productCollection: ProductCollection;
    productName: String;
    productPrice: number;
    productLeftCount: number;
    productSize?: ProductSize;
    productVolume?: number;
    productDesc?: string;
    productImage?: string[];
    productView?: number;
}