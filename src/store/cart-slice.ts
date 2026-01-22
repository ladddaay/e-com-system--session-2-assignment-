import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../types/cart-item-type";

type CartState = {
    cartProducts: CartItem[];
};

const initialState: CartState = {
    cartProducts: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (
            state,
            action: PayloadAction<{ productId: string; quantity?: number }>,
        ) => {
            state.cartProducts = [
                ...state.cartProducts,
                {
                    productId: action.payload.productId,
                    quantity: action.payload.quantity ?? 1,
                },
            ];
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.cartProducts = state.cartProducts.filter(
                (x) => x.productId !== action.payload,
            );
        },
        updateItemQuantity: (
            state,
            action: PayloadAction<{
                action: "increase" | "decrease";
                productId: string;
            }>,
        ) => {
            state.cartProducts = state.cartProducts.map((x) => {
                if (x.productId === action.payload.productId) {
                    return {
                        ...x,
                        quantity:
                            action.payload.action === "increase"
                                ? x.quantity + 1
                                : x.quantity - 1,
                    };
                }

                return x;
            });
        },
    },
});

export const { addProduct, removeProduct, updateItemQuantity } =
    cartSlice.actions;
