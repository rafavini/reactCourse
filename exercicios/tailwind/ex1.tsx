export default function Index() {
    return (
        <div className=" bg-gray-100">
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center space-x-4">
                            <span className="text-xl font-bold text-blue-600">MinhaApp</span>
                            <a href="#" className="text-gray-700 hover:text-blue-600">Início</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">Sobre</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">Serviços</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600">Contato</a>
                        </div>
                        <div>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo à MinhaApp</h1>
                <p className="text-gray-600 mb-4">
                    Esta é uma tela inicial com um menu simples no topo, feita com Tailwind CSS.
                </p>
                <p className="text-gray-600">
                    Você pode usar essa estrutura como base para criar páginas com navegação no topo e conteúdo central.
                </p>
            </main>
        </div>
    );
}