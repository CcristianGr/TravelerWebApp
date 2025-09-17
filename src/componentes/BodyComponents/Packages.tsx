import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export const OurPackages = () => {

    const paquetes = [
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
        { im: "", title: "Discover amazing places of the world with us", starts: 250, price: 350, rating: 4.5, place: "Thailand",days:2,max_p:2 },
    ]

    return (
        <>
            <div>
                {
                    paquetes.map((i, index) => (
                        <div key={index}>
                            <div>
                                <img src={i.im} alt="place" />
                            </div>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                                    <p>{i.place}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                                    <p>{i.days}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="fa-solid fa-user" />
                                    <p>{i.place}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}