'use client'

import { use, useEffect, useState } from "react";


type User = {
    id: number;
    name: string;
    email: string;
};

export default function ClientSide() {
    const [users, setUsers] = useState<User[]>([]);

    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Usuários</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}