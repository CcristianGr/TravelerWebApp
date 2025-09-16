import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

export const TravGuides = () => {
    const guides = [
        { gPic: "src/assets/GuidesPics/team-1.jpg", gName: "Guide Name", gDesig: "Designation" },
        { gPic: "src/assets/GuidesPics/team-2.jpg", gName: "Guide Name", gDesig: "Designation" },
        { gPic: "src/assets/GuidesPics/team-3.jpg", gName: "Guide Name", gDesig: "Designation" },
        { gPic: "src/assets/GuidesPics/team-4.jpg", gName: "Guide Name", gDesig: "Designation" }
    ]
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-10">
                <p className="text-xl text-primary">GUIDES</p>
                <p className="text-2xl"><strong>Our Travel Guides</strong></p>
                <div className="flex flex-row h-auto mt-5 w-6xl lg:max-w-4xl md:max-w-3xl">
                    {guides.map((guide, index) => (
                        <div key={index}
                            className="flex flex-col bg-white justify-center items-center m-3 h-full overflow-hidden transition duration-500 delay-50 group hover:shadow-2xl">
                            <div className="w-full h-full contain-content relative flex flex-col justify-center items-center">
                                <img
                                    src={guide.gPic}
                                    alt=""
                                    className="w-full h-full transition duration-500 delay-50 group-hover:scale-110 group-hover:brightness-50"
                                    data-avatar
                                />
                                <div className="absolute text-transparent *:m-0.5 *:p-1 *:border-1 transition duration-500 delay-50 group-hover:text-primary group-hover:*:border-1 *:cursor-pointer *:hover:bg-primary *:hover:text-white *:hover:border-primary group-hover:*:animate-fade-up">
                                    <FontAwesomeIcon icon="fa-brands fa-x-twitter" />
                                    <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                                </div>
                            </div>
                            <p className="mt-3 text-sl">{guide.gName}</p>
                            <p className="mb-15 text-[12px] text-body-text">{guide.gDesig}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}