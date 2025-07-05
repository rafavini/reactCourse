type Props = {
    nome: string;
    email: string;
    onDetalhes: () => void;
};

export default function CardUsuario({ nome, email, onDetalhes }: Props) {
    return (
        <div className="bg-white shadow p-4 rounded mb-4">
            <h2 className="text-lg font-bold">{nome}</h2>
            <p className="text-gray-600">{email}</p>
            <button
                onClick={onDetalhes}
                className="mt-2 text-blue-600 hover:underline text-sm"
            >
                Ver detalhes
            </button>
        </div>
    );
}
