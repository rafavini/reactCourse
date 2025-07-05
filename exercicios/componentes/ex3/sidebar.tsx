export default function Sidebar() {
    return (
        <div className="w-48 bg-blue-700 text-white p-4 min-h-screen">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <a href="#" className="block p-2 hover:bg-blue-800 rounded">Início</a>
            <a href="#" className="block p-2 hover:bg-blue-800 rounded">Usuários</a>
            <a href="#" className="block p-2 hover:bg-blue-800 rounded">Sair</a>
        </div>
    );
}
