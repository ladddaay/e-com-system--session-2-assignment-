import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store";
import Button from "./ui/button";
import { useDispatch } from "react-redux";
import { toggleNav } from "../store/ui-slice";

function Navbar() {
    const cartItems = useAppSelector((state) => state.cart.cartProducts);
    const isNavOpen = useAppSelector((state) => state.ui.isNavOpen);
    const dispatch = useDispatch();
    const totalCartItems =
        cartItems?.reduce((acc, x) => x.quantity + acc, 0) ?? 0;

    return (
        <div
            className={`border border-orange-600 h-screen w-[170px] z-10 fixed top-0 ${isNavOpen ? "left-0" : "-left-[170px]"} lg:w-[250px] lg:fixed lg:top-0 lg:left-0 flex flex-col bg-[#242424]`}
        >
            <div className="ml-auto lg:hidden">
                <Button variant="ghost" onClick={() => dispatch(toggleNav())}>
                    <X className="h-8 w-8" />
                </Button>
            </div>

            <nav className="w-full my-10 flex flex-col gap-3 px-3 py-2">
                <ul className="flex flex-col gap-5">
                    <li className="w-full">
                        <NavLink
                            to="/shop/products"
                            className={(isActive) =>
                                `${isActive ? "underline" : ""}`
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/shop/cart"
                            className={(isActive) =>
                                `${isActive ? "underline" : ""}`
                            }
                        >
                            Cart (<span>{totalCartItems}</span> total items)
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={(isActive) =>
                                `${isActive ? "underline" : ""}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
