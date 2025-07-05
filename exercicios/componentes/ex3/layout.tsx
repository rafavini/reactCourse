import Sidebar from "./sidebar";


type Props = {
    titulo: string;
    children: React.ReactNode;
};

export default function Layout({ titulo, children }: Props) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">{titulo}</h1>
                {children}
            </div>
        </div>
    );
}
