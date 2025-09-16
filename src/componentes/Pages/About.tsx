import { Cards } from "../BodyComponents/Cards"
import { Header } from "../HeaderComponents/Header"
import { AboutUs } from "../BodyComponents/AboutUs"
import { TravGuides } from "../BodyComponents/TravelGuides"

export const AboutPage = () => {
    return (
        <>
            <Header
                params={
                    {
                        labelB: "ABOUT",
                        labelM: "HOME >> ABOUT",
                        button: 0,
                        rem: "28rem"
                    }
                } />
            <AboutUs />
            <TravGuides/>
        </>
    )
}