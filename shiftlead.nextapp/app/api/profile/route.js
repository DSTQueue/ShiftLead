// API route for updating user profile
// POST: { name, email, password }
export async function POST(request) {
  const data = await request.json();
  // TODO: Implement backend logic (save to DB, validate, etc.)
  return new Response(JSON.stringify({ success: true, data }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
