import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/cart-slice";

type Props = {
    productId: string;
};

function RemoveProductFromCartButton({ productId }: Props) {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(removeProduct(productId));
    };

    return (
        <button type="button" className="underline" onClick={() => onClickHandler()}>
            Remove
        </button>
    );
}

export default RemoveProductFromCartButton;
