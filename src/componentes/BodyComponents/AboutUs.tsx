export const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center">
                <div className="flex flex-row items-center w-[60%]">
                    <div className="relative w-1/2">
                        <img src="src/assets/BodyAssets/about.jpg" className="w-160" />
                    </div>
                    <div className="flex flex-col bg-white w-180 h-120 p-8 right-20 relative">
                        <p className="text-primary">ABOUT US</p>
                        <p className="text-3xl">
                            <strong>
                                We Provide Best Tour Packages In Your Budget
                            </strong>
                        </p>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="flex flex-row w-full *:p-2 relative">
                            <div className="flex-1 h-full">
                                <img src="src/assets/BodyAssets/about-1.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 h-full">
                                <img src="src/assets/BodyAssets/about-2.jpg" alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row justify-center items-center">
                        <div>aaa</div>
                        <div className="flex flex-col">
                            <h3 className="text-black">Competitive Pricing</h3>
                            <p>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}