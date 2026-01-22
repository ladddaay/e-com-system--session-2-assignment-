import { useGetProducts } from "../api/react-queries/product-queries";
import ProductCard from "../components/cards/product-card";

export function ProductsPage() {
    const { data: products, isLoading, error } = useGetProducts();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading products</div>;
    }

    return (
        <div>
            <div className="border-b w-full h-[100px] flex items-center justify-between px-5">
                <div>
                    <h1 className="font-bold text-2xl">Product Catalog</h1>
                    <p className="text-sm">List of all products</p>
                </div>
            </div>

            <div className="border border-cyan-400 py-15 px-10 flex flex-wrap gap-4">
                {products?.map((x) => {
                    return <ProductCard product={x} key={x.id} />;
                })}
            </div>
        </div>
    );
}
