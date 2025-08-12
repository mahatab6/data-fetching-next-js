import { dbConnect } from "@/lib/dbConnect";

export async function POST(req) {
    try {

        const body = await req.json();
        const {db} = await dbConnect();
       
        const result = await db.collection("NewUsers").insertOne(body);

        return Response.json({message: "USer registered", id: result.insertedId})
    } catch (error) {
        console.error("Register API errpr:", error)
    }
}