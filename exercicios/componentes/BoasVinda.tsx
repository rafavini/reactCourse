type Props = {
    nome: string;
    idade: number;
};

export default function BoasVindas({ nome, idade }: Props) {
    return (
        <div className="p-4 bg-green-100 rounded">
            <h1 className="text-xl font-bold">Olá, {nome}!</h1>
            <p>Você tem {idade} anos.</p>
        </div>
    );
}