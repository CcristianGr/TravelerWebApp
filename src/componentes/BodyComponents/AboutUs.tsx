export const AboutUs = () => {
    return (
        <>
            <div className="flex flex-col w-1/2 justify-center items-center">
                <div className="flex flex-row items-center">
                    <div className="relative">
                        <img src="src\assets\about.jpg" className="w-100"/>
                    </div>
                    <div className="flex flex-col bg-white w-120 h-50">
                        <p>ABOUT US</p>
                        <p>We Provide Best Tour Packages In Your Budget</p>
                        <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="flex flex-row">
                            <img src="src\assets\about1.jpg" alt="" />
                            <img src="src\assets\about2.jpg" alt="" />
                        </div>
                        <button>Book Now</button>
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