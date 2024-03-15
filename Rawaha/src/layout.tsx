import Footer from "./components/Shared/Footer";
import { Outlet} from "react-router-dom";
import Header from "./components/Shared/Header";


export default function Layout () {
   
    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
}