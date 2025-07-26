import FormEditarUsuario from "@/exercicios/componentes/formulario";

export default async function EditarUsuarioPage({ params }: {params: Promise<{id: string}>}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/teste/${id}`);
  const usuario = await res.json();
  console.log(usuario)

  return (
    <div>
      <h2>Editar Usuário</h2>
      <FormEditarUsuario id={usuario.id} name={usuario.name} email={usuario.email}/>
    </div>
  );
}
