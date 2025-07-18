import Button from "./button";
type usersProps = {
    id: number;
    name: string;
    username: string;
    email: string;
};
//server side
export default async function UserPage() {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: usersProps[] = await response.json();
    console.log(users);

    return (
        <div>
            {/* uso de client side dentro de server side */}
            {/* <Button /> */}
            <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
            <ul className="space-y-2">
                {users.map(user => (
                    <li key={user.id} className="p-4 bg-gray-100 rounded shadow">
                        <h2 className="text-xl font-semibold">{user.name}</h2>
                        <p className="text-gray-600">Username: {user.username}</p>
                        <p className="text-gray-600">Email: {user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}