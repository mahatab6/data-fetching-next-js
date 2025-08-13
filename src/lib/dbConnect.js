import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionName = {
    NewUser : "NewUsers"
}

export async function dbConnect () {

    const uri = process.env.MONGODB_URL;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });
    
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);

    return {client, db}
    
}

