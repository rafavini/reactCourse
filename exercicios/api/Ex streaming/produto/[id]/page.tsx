import ProdutoDetalhes from "./_component/detalhesProduto";
import { Suspense } from "react";
import Loading from "./loading";

export default async function DetalheProduto({ params }: { params: { id: string } }) {

    const { id } = await params;

    return (
        <Suspense fallback={<Loading />}>
            <ProdutoDetalhes id={id} />
        </Suspense>
    )
}