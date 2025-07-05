// app/components/Card.tsx

type Props = {
    titulo: string;
    conteudo: string;
};

export default function Card({ titulo, conteudo }: Props) {
    return (
        <div className="bg-white p-4 rounded shadow-md border border-gray-200 h-[30rem]">
            <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
            <p className="text-gray-700">{conteudo}</p>
        </div>
    );
}
