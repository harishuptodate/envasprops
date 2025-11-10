export async function GET() {
  try {
const res = await fetch('https://jsonplaceholder.typicode.com/posts')
const posts = await res.json()
return Response.json(posts)
  } catch (error) {
    return Response.json({ status: "error" }, { status: 500 });
  }
}