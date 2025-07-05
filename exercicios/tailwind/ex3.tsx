export default function Index() {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className=" text-sm  text-gray-700 ">Email</label>
                        <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded   focus:ring-blue-500" placeholder="Digite seu email" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="senha" className=" text-sm  text-gray-700 ">Senha</label>
                        <input type="password" id="senha" className="w-full border border-gray-300 p-2 rounded   focus:ring-blue-500" placeholder="Digite sua senha" />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Entrar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Ainda não tem uma conta?
                    <a href="#" className="text-blue-600 hover:underline">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}