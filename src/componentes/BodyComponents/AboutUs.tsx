import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel, faMedal, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import aboutImg from '../../assets/BodyAssets/about.jpg'
import about1Img from '../../assets/BodyAssets/about-1.jpg'
import about2Img from '../../assets/BodyAssets/about-2.jpg'

export const AboutUs = () => {
    const data = [
        {idData:1 ,font: faMoneyCheckDollar, title: "Competitive Pricing", description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea" },
        {idData:2 ,font: faMedal, title: "Best Services", description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea" },
        {idData:3 ,font: faHotel, title: "Worldwide Coverage", description: "Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea" },
    ]
    return (
        <div className="flex flex-col w-full justify-center items-center ">
            <div className="flex flex-row items-center w-6xl lg:max-w-4xl md:max-w-3xl xl:max-w-5xl">
                <div className="relative size-150">
                    <img src={aboutImg} className="absolute w-full h-full" alt='About' />
                </div>
                <div className="bg-white w-180 h-110 p-8 md:text-sm -ml-20 z-1">
                    <p className="text-primary tracking-[4px]">ABOUT US</p>
                    <p className="text-3xl">
                        <strong>
                            We Provide Best Tour Packages In Your Budget
                        </strong>
                    </p>
                    <p className="mt-2">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <div className="flex flex-row w-full *:p-2 md:max-w-xl">
                        <div className="flex-1 h-full">
                            <img src={about1Img} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 h-full">
                            <img src={about2Img} alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="mt-6 h-10 ">
                        <button className="bg-primary w-1/4 h-full text-white hover:bg-hover-p cursor-pointer">Book Now</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-6xl lg:max-w-4xl md:max-w-3xl xl:max-w-5xl mt-10 h-20">
                {
                    data.map((datas, index) => (
                        <div className="flex flex-row justify-center items-center" key={datas.idData}>
                            <div className="w-[30%] bg-primary h-full flex justify-center items-center mr-5">
                                <FontAwesomeIcon icon={datas.font} className=' text-3xl text-white' />
                            </div>
                            <div className="flex flex-col w-[70%]">
                                <h3 className="text-black text-sm/6"><strong>{datas.title}</strong></h3>
                                <p className='text-sm/5'>{datas.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}