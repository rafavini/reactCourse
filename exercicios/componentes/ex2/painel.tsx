
type Props = {
    titulo: string;
    children: React.ReactNode;
    onAcao: () => void;
};

export default function Painel({ titulo, children, onAcao }: Props) {
    return (
        <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{titulo}</h2>

            <div className="mb-4">{children}</div>

            <button
                onClick={onAcao}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Executar ação
            </button>
        </div>
    );
}
