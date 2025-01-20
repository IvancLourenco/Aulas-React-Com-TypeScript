import { Outlet } from "react-router"
import {Header} from "../header/index"
export function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}