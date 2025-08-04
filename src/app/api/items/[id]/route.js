import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
  
   const p = await params;
   const {db} = await dbConnect();
   const singleData = await db.collection("user").findOne({_id: new ObjectId(p)});
   return Response.json(singleData);

}

export async function DELETE(req, {params}) {
  
   const p = await params;
   const {db} = await dbConnect();
   const deleteData = await db.collection("user").deleteOne({_id: new ObjectId(p)});
   return Response.json(deleteData);
}

export async function PATCH(req, {params}) {
  
   const { id } =  params;
   const postDate = await req.json();
   
   const {db} = await dbConnect();

   const filter = {_id: new ObjectId(id)};
   const update = { $set: postDate };

  
   const dataUpdata = await db.collection("user").updateOne(filter, update);
   return Response.json(dataUpdata);
}