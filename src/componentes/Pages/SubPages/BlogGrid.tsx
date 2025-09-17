import { Header } from "../../HeaderComponents/Header"
import { SideBar } from "../../BodyComponents/SideBar"

export const BlogGrid = () => {
    return (
        <>
            <Header
                params={{
                    labelB: "Blog",
                    labelM: "HOME >> Blog",
                    button: 0,
                    rem: "28rem"
                }}
            />
            <div>
                <SideBar/>
            </div>
        </>
    )
}