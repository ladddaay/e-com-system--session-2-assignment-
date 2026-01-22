import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addProduct } from "../../store/cart-slice";
import Button from "../ui/button";

type Props = {
    productId: string;
    quantity: number;
};

function AddToCartButon({ productId, quantity }: Props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addProduct({ productId: productId, quantity: quantity }));
        navigate(`/shop/product/${productId}`);
    };

    return (
        <Button
            variant="ghost"
            className="underline"
            onClick={() => handleOnClick()}
        >
            Add to cart
        </Button>
    );
}

export default AddToCartButon;
