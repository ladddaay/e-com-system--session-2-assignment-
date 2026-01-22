import { Outlet, useNavigate, useParams } from "react-router";
import { useGetProduct } from "../api/react-queries/product-queries";

export function ProductsDetailPage() {
    const { productId } = useParams<{ productId: string }>();
    const { data: product, isLoading, error } = useGetProduct(productId);
    const navigate = useNavigate();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>error fetching data</div>;
    }

    return (
        <div className="pt-10 pl-10">
            <div className="flex flex-col gap-3 text-xl">
                <h1 className="font-bold text-2xl text-center">
                    {product?.title}
                </h1>
                <div>{product?.price} Rupees</div>
                <div>Category: {product?.category}</div>
                <div>Brand: {product?.brand}</div>
                <div>Rating: {product?.rating}</div>
                <div>Tags: {product?.tags.toString()}</div>
                <button
                    type="button"
                    className="px-3 py-2 border w-[300px] mx-auto"
                    onClick={() =>
                        navigate(`/shop/product/${productId}/customise`)
                    }
                >
                    Customise
                </button>
                <Outlet context={product} />
            </div>
        </div>
    );
}
