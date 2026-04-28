import { createPost } from "@/app/api/Post/postApi"
import { Post } from "@/app/lib/definitions"
import { useState } from "react"

const PostBar = () => {

    const [data, setData] = useState<string>("")
    const [title, setTitle] = useState<string>("")

    const handleSubmit = () => {
        // e.preventDefault()
        console.log({ title, content: data })
        createPost({ title, content: data })
    }

    return (
        <>
            <form className="flex items-center justify-center flex-col">
                <input type="text" placeholder="Digite seu titulo" className="text-center" onChange={(e) => setTitle(e.target.value)}></input>
                <textarea style={{ width: 500, height: 100 }}
                    className="text-center p-2"
                    placeholder="Digite aqui..." onChange={(e) => setData(e.target.value)}></textarea>
                <button className="" onClick={handleSubmit}>Enviar</button>
            </form>
        </>
    )
}

export default PostBar