type Props = {
    titulo: string;
    cor: 'azul' | 'vermelho';
    subtitulo?: string;
    funcao?: () => void;
    className?: string;
};

export default function Button({ titulo, cor, subtitulo, funcao, className }: Props) {
    let corBase = '';

    switch (cor) {
        case 'azul':
            corBase = 'bg-blue-900';
            break;
        case 'vermelho':
            corBase = 'bg-red-500';
            break;
        default:
            break;
    }

    return (
        <button
            onClick={funcao}
            className={`${corBase} ${className} text-white p-4 rounded-lg`}
        >
            <div className="text-2xl font-bold">{titulo}</div>
            {subtitulo && <div className="text-sm opacity-80">{subtitulo}</div>}
        </button>
    );
}
