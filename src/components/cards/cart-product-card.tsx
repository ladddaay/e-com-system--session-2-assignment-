import { useGetProducts } from "../../api/react-queries/product-queries";
import { useAppDispatch } from "../../store";
import { updateItemQuantity } from "../../store/cart-slice";
import type { CartItem } from "../../types/cart-item-type";
import RemoveProductFromCartButton from "../buttons/remove-from-cart-button";
import Button from "../ui/button";

type Props = {
    cartItem: CartItem;
};

export function CartProductCard({ cartItem }: Props) {
    const { data } = useGetProducts();
    const product = data?.find((x) => x.id === cartItem.productId);
    const dispatch = useAppDispatch();

    const increaseQuantity = (productId: string) => {
        console.log(productId);
        dispatch(
            updateItemQuantity({ action: "increase", productId: productId }),
        );
    };

    const decreaseQuantity = (productId: string) => {
        dispatch(
            updateItemQuantity({ action: "decrease", productId: productId }),
        );
    };

    return (
        <div
            key={product?.id}
            className="border rounded-2xl px-4 py-2 w-full  md:w-[250px] flex flex-col gap-1"
        >
            <div className="text-amber-100">{product?.title}</div>
            <div>{product?.price} Rupees</div>
            <div className="flex justify-between text-sm">
                <span>Category:</span>
                <span>{product?.category}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>Quontity:</span>
                <span>
                    <span className="border">
                        <Button
                            variant="ghost"
                            onClick={() => decreaseQuantity(cartItem.productId)}
                        >
                            -
                        </Button>
                    </span>
                    <span className="px-3">{cartItem.quantity}</span>
                    <span className="border">
                        <Button
                            variant="ghost"
                            onClick={() => increaseQuantity(cartItem.productId)}
                        >
                            +
                        </Button>
                    </span>
                </span>
            </div>
            <div className="text-center">
                <RemoveProductFromCartButton productId={cartItem.productId} />
            </div>
        </div>
    );
}
