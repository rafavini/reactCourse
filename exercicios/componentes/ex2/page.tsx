'use client';

import Painel from "@/exercicios/componentes/ex2/painel";

export default function Home() {
    function dizerOla() {
        alert("Olá! Você clicou no botão.");
    }

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">
            <Painel titulo="Área do Usuário" onAcao={dizerOla}>
                <p>Bem-vindo ao sistema! esse pedaço veio do children.</p>
            </Painel>
        </main>
    );
}
