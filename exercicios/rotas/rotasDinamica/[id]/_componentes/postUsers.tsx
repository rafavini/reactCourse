
type postsProps = {
    id: number;
    title: string;
};
export default async function PostUsers({ id }: { id: string }) {

      await new Promise((resolve) => setTimeout(resolve, 4000)); // Simulando um atraso de 4 segundos

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const posts: postsProps[] = await response.json();

    return (
        <div>
            <h2 className="text-xl font-semibold mt-4">Posts:</h2>
            <ul className="mt-2">
                {posts.map((post) => (
                    <li key={post.id} className="border-b py-2">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
