export const DisplayPost = () => {
    const Post = [
        { idpost:1, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:2, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:3, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:4, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:5, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:6, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:7, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:8, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:9, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
        { idpost:10, day: "01", month: "JAN", who: "ADMIN", title: "TOURS & TRAVEL", description: "Dolor justo sea kasd lorem clita justo diam amet" },
    ]
    return (
        <div className="grid grid-rows-auto grid-cols-2 gap-5">
            {
                Post.map((p) => (
                    <div key={p.idpost} className="bg-white w-full h-80">
                        <div className="relative w-full h-50 flex">
                            <img src="src/assets/BodyAssets/blog-2.jpg" alt="" className="w-full h-full" />
                            <div className="absolute top-7 bg-primary text-center w-14 -left-4 z-1 p-1 after:absolute after:-top-[16px] after:left-0
                                    after:content-[''] after:border-[8px] after:border-solid after:border-t-transparent after:border-r-[#5f8f25] after:border-b-[#5f8f25] after:border-l-transparent after:w-0 after:h-0">
                                <p className="font-[800] text-[13px] h-3 "><strong>{p.day}</strong></p>
                                <small className="text-white font-[600] text-[12px] h-5">{p.month}</small>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center p-4">
                            <p className="text-primary *:hover:cursor-pointer *:hover:underline"> <a href="/">{p.who}</a> | <a href="/">{p.title}</a> </p>
                            <a className="font-[600] hover:cursor-pointer hover:underline" href="/"> {p.description} </a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}