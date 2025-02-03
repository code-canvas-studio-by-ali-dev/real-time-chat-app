import { Mongoose } from "mongoose";

let cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null} = {
    conn: null,
    promise: null,
}


export {
    cached
}