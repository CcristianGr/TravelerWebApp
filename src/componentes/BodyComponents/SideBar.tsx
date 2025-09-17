import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faFacebookF, faXTwitter, faLinkedinIn, faInstagram, faYoutube)

export const SideBar = () => {
    const categorias = [
        { categ: "Web Design", post: "150" },
        { categ: "Web Development", post: "131" },
        { categ: "Online Marketing", post: "78" },
        { categ: "Keyword Research", post: "56" },
        { categ: "Email Marketing", post: "98" },
    ]
    const RecentPost = [
        {img:"src/assets/BodyAssets/blog-100x100.jpg",titlepost:"Diam loren dolore justo eirmod lorem dolore",date:"Jan 01,2050"},
        {img:"src/assets/BodyAssets/blog-100x100.jpg",titlepost:"Diam loren dolore justo eirmod lorem dolore",date:"Jan 01,2050"},
        {img:"src/assets/BodyAssets/blog-100x100.jpg",titlepost:"Diam loren dolore justo eirmod lorem dolore",date:"Jan 01,2050"},
    ]
    const tags =["Design","Development","Marketing","SEO","Writing","Consulting"]
    return (
        <>
            <section>
                {/* User Section */}
                <div>
                    <div>
                        <img src="src/assets/BodyAssets/user.jpg" alt="" />
                    </div>
                    <p>John Doe</p>
                    <p>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est ipsum erat kasd amet elitr</p>
                    <div>
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faXTwitter} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
                {/* KeyWord Section */}

                <div>
                    <div>
                        <input type="text" placeholder='KeyWord' />
                        <span>L</span>
                    </div>
                </div>
                {/* Categories Section */}
                <div>
                    {
                        categorias.map((cat, i) => (
                            <div>
                                <a href="#" key={i}>
                                    {cat.categ}
                                    <span>
                                        <p>{cat.post}</p>
                                    </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
                {/* Recent Post Section */}
                
                <div>
                    {
                        RecentPost.map((post,i) => (
                            <div>
                                <div>
                                    <img src={post.img} alt="" />
                                </div>
                                <p>{post.titlepost}</p>
                                <p>{post.date}</p>
                            </div>
                        ))
                    }
                </div>
                {/* TagCloud Section */}

                <div>
                    {
                        tags.map((t) => (
                            <div>{t}</div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}