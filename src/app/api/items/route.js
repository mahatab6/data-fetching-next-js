

export async function GET() {
  
    const data = {
        message: "Successfuly get data",
        error: false,
        status: 200
    }
 
  return Response.json({ data })

}

export async function POST(req) {
  
    const postdata = await req.json();
 
  return Response.json({ postdata })
}