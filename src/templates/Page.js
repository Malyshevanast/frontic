import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Name from "../components/Name";
import "./page.css"

const Page = () => (
    <div>
        <Name />
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Page;