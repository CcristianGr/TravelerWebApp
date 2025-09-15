import { Header } from "./../HeaderComponents/Header"
import { getPostActiveCloseArea,postComment } from "../../API/Endpoint"
import { useEffect, useState } from "react";

export const HomePage = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPostActiveCloseArea().then((data) => {
            if (Array.isArray(data)) {
                setPosts(data);
            } else if (data && Array.isArray(data.data)) {
                setPosts(data.data);
            } else {
                setPosts([]);
            }
            setLoading(false);
        });
        postComment({ name: 'sup', email: 'anothersup@gmail.com' })
          .then(res => console.log('Respuesta POST:', res))
          .catch(err => console.error('Error POST:', err));
    }, []);

    return (
        <>
            <div>
                <Header
                    params={{
                        labelS: "Tours & Travel",
                        labelB: "Discover Amazing Places With Us",
                        button: 1,
                    }}
                />
                <div>
                    {
                        loading ? (
                            <p>Cargando...</p>
                        ) : (
                            <div className="flex flex-row flex-wrap">
                                {posts.map((post, idx) => (
                                    <>
                                        {/* <li key={idx}>{JSON.stringify(post)}</li> */}
                                        <div id={JSON.stringify(post.postId)} key={idx} className="w-60 h-40 flex flex-col bg-white gap-5 m-5">
                                            <p>Nombre: {JSON.stringify(post.name)}</p>
                                            <p>Email: {JSON.stringify(post.email)}</p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};