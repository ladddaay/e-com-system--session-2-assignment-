import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Navbar from "../components/navbar";

export function MainLayout() {
    return (
        <div>
            <div className=" w-full h-screen flex">
                <Navbar/>
                <div className={`flex-1 lg:ml-[250px]`}>
                    <Header />
                    <div className="mt-[50px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
