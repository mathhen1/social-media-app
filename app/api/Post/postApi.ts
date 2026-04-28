import { Post } from "@/app/lib/definitions"
import { ParamValue } from "next/dist/server/request/params"

const getPosts = async (): Promise<Post[]> => {
    try {

        const res = await fetch("http://localhost:4000/get-posts", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })

        const x = await res.json()

        if (x) {
            // console.log(x, "hahahahhah")
            return x
        }

        return []

    } catch (err) {
        throw err
    }
}

const getPostDetails = async (id: ParamValue): Promise<any> => {
    try {
        const x = await fetch(`http://localhost:4000/get-post:${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        if (x) {
            return x.json()
        }
    } catch (err) {
        console.log(err)
    }
}

const createPost = async (data: Object): Promise<any> => {
    try {

        const res = await fetch("http://localhost:4000/create-post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data)
        })

        return res.json()

    } catch (err) {
        throw err
    }
}

export const verifyOptionsAction = async () => {
    try {
        
    } catch (err) {

    }
}

export { getPosts, createPost, getPostDetails }
