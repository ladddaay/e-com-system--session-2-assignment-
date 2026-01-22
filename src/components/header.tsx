import { Menu } from "lucide-react";
import Button from "./ui/button";
import { useDispatch } from "react-redux";
import { toggleNav } from "../store/ui-slice";

function Header() {
    const dispatch = useDispatch();

    return (
        <div className="border border-pink-500 px-5 h-[50px] flex items-center fixed top-0 w-full bg-[#242424]">
            <Button
                variant="ghost"
                onClick={() => dispatch(toggleNav())}
                className="lg:hidden"
            >
                <Menu />
            </Button>

            <div className="flex items-center justify-between w-full">
                <div>
                    <h1 className="text-amber-100 font-bold text-2xl">
                        Swift Shop
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Header;
