import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube, faMagnifyingGlass)

export const SideBar = () => {
    const categorias = [
        { categ: "Web Design", post: "150" },
        { categ: "Web Development", post: "131" },
        { categ: "Online Marketing", post: "78" },
        { categ: "Keyword Research", post: "56" },
        { categ: "Email Marketing", post: "98" },
    ]
    const RecentPost = [
        { img: "src/assets/BodyAssets/blog-100x100.jpg", titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
        { img: "src/assets/BodyAssets/blog-100x100.jpg", titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
        { img: "src/assets/BodyAssets/blog-100x100.jpg", titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
    ]
    const tags = ["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"]
    return (
        <>
            <div className='grid grid-rows-[33%_10%_24%_36%_10%]'>
                {/* User Section */}
                <div className='p-5 bg-white mb-10 flex flex-col justify-center items-center'>
                    <div className='mb-3'>
                        <img src="src/assets/BodyAssets/user.jpg" alt="" />
                    </div>
                    <p className='text-3xl text-primary font-[600] mb-3'>John Doe</p>
                    <p className='text-center text-body-text'>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est ipsum erat kasd amet elitr</p>
                    <div className='*:m-2 mt-4 text-primary *:cursor-pointer'>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                {/* KeyWord Section */}

                <div className='flex justify-center items-center h-20 bg-white'>
                    <div className='flex *:h-10'>
                        <input type="text" placeholder='KeyWord' className='border-1 border-gray-400 pl-4' />
                        <div className='w-10 bg-primary flex justify-center items-center text-white'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-primary w-full h-full' />
                        </div>
                    </div>
                </div>
                {/* Categories Section */}
                <div className='flex flex-col'>
                    <p>CATEGORIES</p>
                    <div className='bg-white p-5'>
                        {
                            categorias.map((cat, i) => (
                                <div className='flex flex-row justify-between p-2'>
                                    <a href="#" key={i}>
                                        <span className='text-primary font-[600]'>{"> "}</span>
                                        {cat.categ}
                                    </a>
                                    <span className='bg-primary px-2 text-white font-[600]'>
                                        <p>{cat.post}</p>
                                    </span>
                                </div>
                            ))
                        }
                    </div>

                </div>
                {/* Recent Post Section */}

                <div className='flex flex-col'>
                    <p>RECENT POST</p>
                    <div>
                        {
                            RecentPost.map((post, i) => (
                                <div className='flex flex-row bg-white my-5'>
                                    <div className='relative w-45'>
                                        <img src={post.img} alt="" className='w-full h-full' />
                                    </div>
                                    <div className='p-3 self-center'>
                                        <p className='font-[500]'>{post.titlepost}</p>
                                        <p className='text-primary'>{post.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* TagCloud Section */}

                <div>
                    <p>TAG CLOUD</p>
                    <div className='flex flex-row flex-wrap gap-3 *:bg-white *:h-11'>
                        {
                            tags.map((t) => (
                                <div className='self-center p-3'>
                                    <p>{t}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}