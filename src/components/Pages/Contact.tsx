import { Header } from "../HeaderComponents/Header"
import { SendContact } from "../BodyComponents/SendContact"

export const ContactUs = () => {

    return (
        <>
            <Header params={
                {
                    labelB: "CONTACT",
                    labelM: "HOME >> CONTACT",
                    button: 0,
                    rem: "28rem"
                }
            } /> 
            <SendContact/>
        </>
    )
}