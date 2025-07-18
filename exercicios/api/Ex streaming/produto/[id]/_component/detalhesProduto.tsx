import Image from "next/image";

export default async function ProdutoDetalhes({id}: { id: string }) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <img
                src={product.image}
                alt={product.title}
                className="h-64 object-contain mx-auto mb-6"
            />
            <p className="text-lg font-semibold text-green-700 mb-2">${product.price}</p>
            <p className="text-sm text-gray-500 mb-2">Categoria: {product.category}</p>
            <p className="text-gray-700">{product.description}</p>
            <a
                href="/"
                className="inline-block mt-6 bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300"
            >
                Voltar para produtos
            </a>
        </div>
    );
}
