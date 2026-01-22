import { useNavigate, useOutletContext } from "react-router";
import type { ProductType } from "../../types/product-type";
import AddToCartButon from "../buttons/add-to-cart-button";
import Button from "../ui/button";
import { useState } from "react";

export default function ProductCustomiseDialog() {
    const [quantity, setQuantity] = useState(1);
    const product = useOutletContext<ProductType>();
    const navigate = useNavigate();

    return (
        <div className="border border-b-amber-800 fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="w-[400px] h-auto py-4 px-4 bg-cyan-700 rounded-2xl ">
                <div>customise dialog (update quantities)</div>

                <div>
                    <span>Quontity:</span>
                    <span>
                        <span className="border">
                            <Button
                                variant="ghost"
                                onClick={() => setQuantity((x) => x - 1)}
                            >
                                -
                            </Button>
                        </span>
                        <span className="px-3">{quantity}</span>
                        <span className="border">
                            <Button
                                variant="ghost"
                                onClick={() => setQuantity((x) => x + 1)}
                            >
                                +
                            </Button>
                        </span>
                    </span>
                </div>

                <div className="flex justify-around">
                    <Button
                        type="button"
                        variant="ghost"
                        className="underline"
                        onClick={() => navigate(`/shop/product/${product.id}`)}
                    >
                        Close
                    </Button>
                    <AddToCartButon
                        productId={product.id}
                        quantity={quantity}
                    />
                </div>
            </div>
        </div>
    );
}
