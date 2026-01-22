import { Link } from "react-router";

export default function NotFoundPage() {
    return (
        <div>
            404 Not Found
            <div>
                <Link to={"/shop/products"} className="underline">
                    Go To Poroducts
                </Link>
            </div>
        </div>
    );
}
