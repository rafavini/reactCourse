import { promises } from "dns";
import PostUsers from "./_componentes/postUsers";
import { Suspense } from "react";
import Loading from "./loading";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    // await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulando um atraso de 4 segundos

    // const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    // const posts: postsProps[] = await response.json();

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Rota Dinâmica</h1>
            <p className="mt-2">ID: {id}</p>
            <Suspense fallback={<Loading />}>
                <PostUsers id={id} />
            </Suspense>

            {/* <h2 className="text-xl font-semibold mt-4">Posts:</h2>
            <ul className="mt-2">
                {posts.map((post) => (
                    <li key={post.id} className="border-b py-2">
                        {post.title}
                    </li>
                ))}
            </ul> */}
        </div>
    );
}