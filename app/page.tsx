'use client';
import CardUsuario from "@/exercicios/componentes/ex3/cardUsuario";
import Layout from "@/exercicios/componentes/ex3/layout";

export default function Home() {
  function verDetalhes(nome: string) {
    alert(`Usuário: ${nome}`);
  }

  return (
    <Layout titulo="Lista de Usuários">
      <CardUsuario
        nome="Alice"
        email="alice@email.com"
        onDetalhes={() => verDetalhes("Alice")}
      />
      <CardUsuario
        nome="Bruno"
        email="bruno@email.com"
        onDetalhes={() => verDetalhes("Bruno")}
      />
      <CardUsuario
        nome="Carla"
        email="carla@email.com"
        onDetalhes={() => verDetalhes("Carla")}
      />
    </Layout>
  );
}
