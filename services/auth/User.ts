"use server"
import jwt from "jsonwebtoken"
// dont forget to fix the export whit other name 
export const auth = async (credential: string) => {
  const decodet = jwt.decode(credential)
  console.log(decodet); 
}