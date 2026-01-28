import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import blogImg from '../../assets/BodyAssets/blog-100x100.jpg'
import userImg from '../../assets/BodyAssets/user.jpg'

export const SideBar = () => {
    const categorias = [
        { id:1,categ: "Web Design", post: "150" },
        { id:2,categ: "Web Development", post: "131" },
        { id:3,categ: "Online Marketing", post: "78" },
        { id:4,categ: "Keyword Research", post: "56" },
        { id:5,categ: "Email Marketing", post: "98" },
    ]

    const RecentPost = [
        {idpost:1 ,img: blogImg, titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
        {idpost:2 ,img: blogImg, titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
        {idpost:3 ,img: blogImg, titlepost: "Diam loren dolore justo eirmod lorem dolore", date: "Jan 01, 2050" },
    ]

    const tags = [
        {idtag:1 ,Tag:"Design"},
        {idtag:2 ,Tag:"Development"},
        {idtag:3 ,Tag:"Marketing"},
        {idtag:4 ,Tag:"SEO"},
        {idtag:5 ,Tag:"Writing"},
        {idtag:6 ,Tag:"Consulting"}
    ]

    return (
        <div className='grid grid-rows-[33%_10%_24%_36%_10%]'>
            {/* User Section */}
            <div className='p-5 bg-white mb-10 flex flex-col justify-center items-center'>
                <div className='mb-3'>
                    <img src={userImg} alt="" />
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
                            <div className='flex flex-row justify-between p-2' key={cat.id}>
                                <a href="/">
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
                            <div className='flex flex-row bg-white my-5' key={post.idpost}>
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
                            <div className='self-center p-3' key={t.idtag}>
                                <p>{t.Tag}</p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}