export default function Index() {
    return (
        <div className=" bg-gray-100">
            <div className="flex h-screen">

                <div className="w-48 bg-blue-700 text-white p-4 space-y-4">
                    <h2 className="text-lg font-bold mb-4">Menu</h2>
                    <a href="#" className="block hover:bg-blue-800 p-2 rounded">Início</a>
                    <a href="#" className="block hover:bg-blue-800 p-2 rounded">Perfil</a>
                    <a href="#" className="block hover:bg-blue-800 p-2 rounded">Configurações</a>
                    <a href="#" className="block hover:bg-blue-800 p-2 rounded">Sair</a>
                </div>

                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Bem-vindo!</h1>
                </div>

            </div>
        </div>
    );
}