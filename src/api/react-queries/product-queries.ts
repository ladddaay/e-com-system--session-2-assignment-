import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    addProduct,
    getProduct,
    getProducts,
} from "../services/product-services";

export function useGetProducts() {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
}

export function useGetProduct(id?: string) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id as string),
        enabled: !!id,
    });
}

export function useAddProduct() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["product"] });
        },
    });
}
