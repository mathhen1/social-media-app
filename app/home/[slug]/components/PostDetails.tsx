"use client"

import { getPostDetails } from "@/app/api/Post/postApi"
import { Post } from "@/app/lib/definitions"
import { Search } from "lucide-react"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const PostDetails = () => {

    const [post, setPost] = useState<Post>()

    const a = useParams()

    useEffect(() => {
        const x = async () => {
            const b = await getPostDetails(a.slug)
            setPost(b)
        }

        x()
    }, [])

    if (post) {
        console.log(post)
        return (
            <>
                <div className="flex items-center justify-center flex-col m-2 p-2 gap-2">
                    <div id="post--header" className="">

                        <div id="post--header-author" className="">
                            {/* <img></img> */}
                            <p className="text-xl">{post.authorName}</p>
                        </div>

                    </div>

                    <div className="post--body">

                        <div id="post--header-title" className="">
                            <p className="text-2xl">
                                {post.title}
                            </p>
                        </div>

                        <div>
                            <p className="text-2xl">
                                {post.content}
                            </p>
                        </div>

                    </div>

                    <div className="flex w-8/10 justify-center">
                        <textarea className="flex text-center items-center text-xl border rounded-lg" placeholder="Faça parte da conversa!" style={{ width: 500, height: 50 }}></textarea>
                    </div>

                    <div id="post--options" className="flex w-8/10 flex-row gap-4">
                        <button>Ordernar comentarios...</button>
                        <button><Search /></button>
                    </div>
                </div>


            </>
        )

    }

    return (<div className="flex items-center justify-center h-screen">Aguarda ai chefia...</div>)
}

export default PostDetails