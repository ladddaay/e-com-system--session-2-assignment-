import { useNavigate } from "react-router";
import type { ProductType } from "../../types/product-type";

type Props = {
    product: ProductType;
};

function ProductCard({ product }: Props) {
    const navigate = useNavigate();

    return (
        <div
            key={product.id}
            onClick={() => navigate(`/shop/product/${product.id}`)}
            className="border rounded-2xl px-4 py-2 w-full  md:w-[250px] flex flex-col gap-1"
        >
            <div className="text-amber-100">{product.title}</div>
            <div>{product.price} Rupees</div>
            <div className="flex justify-between text-sm">
                <span>Category:</span>
                <span>{product.category}</span>
            </div>
            <div className="flex justify-between text-sm">
                <span>Stock Quontity:</span>
                <span>{product.stock}</span>
            </div>
        </div>
    );
}

export default ProductCard;
