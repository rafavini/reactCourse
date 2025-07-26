'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type userProps = {
    id: number
    name: string
    email: string
}


export default function FormEditarUsuario({ id, name, email }: userProps) {
    const [userid, setUserId] = useState(id);
    const [userName, setUserName] = useState(name);
    const [userEmail, setUserEmail] = useState(email);
    const router = useRouter();

    const handleSalvar = async () => {

        const form = {
            id: userid,
            name: userName,
            email: userEmail
        }
        await fetch('/api/teste', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        router.push('/');
    };

    const handleDeletar = async () => {
        await fetch('/api/teste', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: userid }),
        });
        router.push('/');
    };

    return (
        <div>
            <input
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Nome"
            />
            <input
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Email"
            />
            <button onClick={handleSalvar}>Salvar</button>
            <button onClick={handleDeletar}>Excluir</button>
        </div>
    );
}
