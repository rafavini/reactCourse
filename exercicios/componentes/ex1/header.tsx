// app/components/Header.tsx

type Props = {
    titulo: string;
};

export default function Header({ titulo }: Props) {
    return (
        <header className="bg-blue-600 text-white p-4 text-center">
            <h1 className="text-2xl font-bold">{titulo}</h1>
        </header>
    );
}
