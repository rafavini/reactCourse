// app/api/users/route.js
import db from '@/app/api/database';

export async function GET() {
  const [rows] = await db.query('SELECT * FROM users');
  
return new Response(JSON.stringify(rows), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const [result] = await db.query(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email]
  );
  return Response.json({ id: result.insertId, name, email });
}

export async function PUT(request: Request) {
  const { id, name, email } = await request.json();
  await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [
    name,
    email,
    id,
  ]);
  return Response.json({ success: true });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await db.query('DELETE FROM users WHERE id = ?', [id]);
  return Response.json({ success: true });
}
