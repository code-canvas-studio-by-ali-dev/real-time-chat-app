import { Db, MongoClient } from "mongodb"

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined
}

const mongodbURL = process.env.MONGODB_URL
const status = process.env.NODE_ENV
const option = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!mongodbURL){
    throw new Error('Missing MONGODB_URL environment variable')
}

if(status === 'development') {
    if(!global._mongoClientPromise){
        client = new MongoClient(mongodbURL, option)
        global._mongoClientPromise = client.connect()
    }
    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(mongodbURL, option)
    clientPromise = client.connect()
}

export default async function connectToDatabase(): Promise<Db> {
    const client = await clientPromise
    return client.db()
}
