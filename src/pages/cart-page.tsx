import { useGetProducts } from "../api/react-queries/product-queries";
import { CartProductCard } from "../components/cards/cart-product-card";
import { useAppSelector } from "../store";

function CartPage() {
    const cartItems = useAppSelector((state) => state.cart.cartProducts);
    const { data: products, isLoading, error } = useGetProducts();

    const totalPrice = cartItems.reduce((acc, x) => {
        return (
            acc +
            x.quantity *
                (products?.find((y) => y.id === x.productId)?.price ?? 0)
        );
    }, 0);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error Loading data</div>;
    }

    return (
        <div>
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Your Cart</h1>
                    <p className="text-sm">Why to wait, buy all products</p>
                </div>
            </div>

            <div className="border border-cyan-400 py-15 px-10 flex flex-col gap-4">
                <div className="flex gap-5">
                    <div>Total Price: {totalPrice} Rupees</div>
                    <div>Total Items: {cartItems.length}</div>
                </div>

                <div className="flex flex-wrap gap-3">
                    {cartItems?.map((x) => {
                        return (
                            <CartProductCard key={x.productId} cartItem={x} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CartPage;
