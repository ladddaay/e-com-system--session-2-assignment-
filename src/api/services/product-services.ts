import type { ProductType } from "../../types/product-type";
import axiosClient from "../axios-client";

export const getProducts = async () => {
    const res = await axiosClient.get("/products");
    return res.data.products as ProductType[];
};

export const getProduct = async (id: string): Promise<ProductType | null> => {
    const res = await axiosClient.get(`/products/${id}`);
    return res.data;
};

export const addProduct = async (payload: ProductType) => {
    return await axiosClient.post("/products/add", payload);
};
