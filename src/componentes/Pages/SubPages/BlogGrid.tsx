import { Header } from "../../HeaderComponents/Header"
import { SideBar } from "../../BodyComponents/SideBar"
import { DisplayPost } from "../../BodyComponents/PostDisplay"
import { FooterCom } from "../../FooterComponents/Footer"

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
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-[63%_35%] w-5xl gap-5">
                    <div>
                        <DisplayPost />
                    </div>
                    <div>
                        <SideBar />
                    </div>
                </div>
            </div>
            <FooterCom></FooterCom>
        </>
    )
}