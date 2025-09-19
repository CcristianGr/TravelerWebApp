import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube, faMagnifyingGlass)

export const FooterCom = () => {

    return (
        <>
            <div className="grid grid-cols-4 grid-rows-[80%_20%] w-full h-150 bg-[#212121] text-white mt-40 p-15 *:p-5 *:flex *:flex-col *:justify-start">
                <div className="justify-center">
                    <div className="text-[30px] font-[700] text-white w-full tracking-[3px]">
                        TRAVEL<span className="text-primary">ER</span>
                    </div>
                    <p className='text-body-text mt-2'>Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor</p>
                    <div className='flex flex-col mt-4'>
                        <p className='tracking-[4px] text-[22px]'>Follow Us</p>
                        <div className='*:m-1 mt-2 text-primary *:cursor-pointer *:border-1 *:border-primary *:p-2 *:hover:bg-primary *:hover:text-white *:hover:border-primary'>
                            <FontAwesomeIcon icon={faXTwitter} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-3xl tracking-[3px]'>Our Services</p>
                    <div className='text-body-text text-lg mt-2 flex flex-col *:hover:underline'>
                        <a href='#'>{"> "}About</a>
                        <a href='#'>{"> "}Destination</a>
                        <a href='#'>{"> "}Services</a>
                        <a href='#'>{"> "}Packages</a>
                        <a href='#'>{"> "}Guides</a>
                        <a href='#'>{"> "}Testimonial</a>
                        <a href='#'>{"> "}Blog</a>
                    </div>
                </div>
                <div>
                    <p className='text-3xl tracking-[3px]'>USEFULL LINKS</p>
                    <div className='mt-2 text-body-text text-lg flex flex-col *:hover:underline'>
                        <a href='#'>{"> "}About</a>
                        <a href='#'>{"> "}Destination</a>
                        <a href='#'>{"> "}Services</a>
                        <a href='#'>{"> "}Packages</a>
                        <a href='#'>{"> "}Guides</a>
                        <a href='#'>{"> "}Testimonial</a>
                        <a href='#'>{"> "}Blog</a>
                    </div>
                </div>
                <div className='text-body-text'>
                    <p className='text-3xl tracking-[3px] text-white'>CONTACT US</p>
                    <div className='*:my-2'>
                        <p>123 Street, New York, USA</p>
                        <p>+012 345 67890</p>
                        <p>info@example.com</p>
                        <p className='text-xl text-white tracking-[4px] my-3'>NEWSLETTER</p>
                    </div>
                    <div className='flex h-10 w-full'>
                        <input type="text" placeholder='Your Email' className='bg-white text-body-text w-40' />
                        <div className='bg-primary'>
                            <button className='p-2 text-white'>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}