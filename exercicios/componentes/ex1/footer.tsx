// app/components/Footer.tsx

type Props = {
    texto: string;
};

export default function Footer({ texto }: Props) {
    return (
        <footer className="bg-gray-200 text-center p-4 mt-8">
            <p className="text-sm text-gray-600">{texto}</p>
        </footer>
    );
}
