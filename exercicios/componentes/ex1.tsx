// components/Usuario.tsx
type Props = {
    nome: string;
    email: string;
    idade: number;
};

export default function Usuario({ nome, email, idade }: Props) {
    return (
        <div className="p-4 border rounded shadow-md bg-white mb-4">
            <h2 className="text-lg font-bold">{nome}</h2>
            <p>Email: {email}</p>
            <p>Idade: {idade} anos</p>
        </div>
    );
}
