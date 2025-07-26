import db from '@/app/api/database';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const [rows] = await db.query<any>('SELECT * FROM users WHERE id = ?', [id]);
  return Response.json(rows[0] || null);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { name, email } = await request.json();

  await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);

  return Response.json({ success: true });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  await db.query('DELETE FROM users WHERE id = ?', [id]);

  return Response.json({ success: true });
}
