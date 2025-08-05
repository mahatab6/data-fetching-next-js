import { dbConnect } from "@/lib/dbConnect";


export async function GET() {
    
    const {db} = await dbConnect();
    const result = await db.collection("user").find().toArray();
    return Response.json(result)

}



export async function POST(req) {
  
    const postdata = await req.json();
    const {db} = await dbConnect();
    const result = await db.collection("user").insertOne(postdata);
    return Response.json(result);
    
}