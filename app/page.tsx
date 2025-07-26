import Link from "next/link"

type userProps = {
  id:string
  name: string
  email: string
}

export default async function Index(){
  const response = await fetch("http://localhost:3000/api/teste")
  const dado: userProps[] = await response.json()
  console.log(dado)

  return (
    <div>
      {dado.map((item) => (
      <div>
        <h1>{item.name}/ {item.email}</h1>
        <Link href={`/editarUsuario/${item.id}`}><button>Editar</button></Link>
      </div>
      ))}
    </div>
  )
}