import Card from "@/exercicios/componentes/ex1/card";
import Footer from "@/exercicios/componentes/ex1/footer";
import Header from "@/exercicios/componentes/ex1/header";


export default function Home() {
    return (
        <main className="min-h-screen bg-gray-100 flex flex-col">
            <Header titulo="Minha Página com Componentes" />

            <div className="flex p-6 space-x-4 justify-center items-center">
                <Card titulo="Componente 1" conteudo="Esse é o conteúdo do primeiro cartão." />
                <Card titulo="Componente 2" conteudo="Outro cartão com conteúdo diferente." />
                <Card titulo="Componente 3" conteudo="Você pode adicionar quantos quiser!" />
            </div>

            <div className="absolute bottom-0 w-full">
                <Footer texto="© 2025 MinhaEmpresa - Todos os direitos reservados." />
            </div>
        </main>
    );
}
