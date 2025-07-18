import Link from "next/link";

// Exemplo em React ou Next.js com Tailwind
export default async function Store() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <div key={product.id} className="border p-4 rounded-xl shadow bg-white">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-40 object-contain mx-auto mb-4"
                    />
                    <h2 className="text-lg font-bold">{product.title}</h2>
                    <p className="text-green-600 font-semibold text-sm">${product.price}</p>
                    <p className="text-gray-600 text-sm mt-2">
                        {product.description.slice(0, 100)}...
                    </p>
                    <Link href={`/produto/${product.id}`}>
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Ver mais
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
