"use client"
import { getUser } from '@/app/lib/cookies';
import { Post } from '@/app/lib/definitions';
import { ThumbsUp, MessageSquareMore, SquareUserRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


// let posts = [{
//     id: "1",
//     title: "jane",
//     content: "cuuuuuuuuuu",
//     published: true,
//     authorid: "01"
// }, {
//     id: "2",
//     title: "beth",
//     content: "haha",
//     published: true,
//     authorid: "02"
// }]

interface PostsProps {
    posts: Post[]
}

const PostContent = ({ posts }: PostsProps) => {

    const router = useRouter()

    const [optionsMenu, setOptionsMenu] = useState<string>("hidden")

    const handleLike = () => {
        // console.log("calma ai chefia")
        // console.log("oi", posts.length)
    }

    const handlePostDetails = (id: string) => {
        // console.log(id)
        router.push(`/home/${id}`)
    }

    const handleOptions = () => {
        if (optionsMenu.includes("hidden")) { setOptionsMenu("") }
        else if (optionsMenu.includes("")) { setOptionsMenu("hidden") }

    }

    const isAuthor = async (postAuthor: string): Promise<boolean> => {
        const x = await getUser()
        if (x?.value.includes(postAuthor)) {
            return true
        }

        return false
    }

    if (posts) {

        return (
            <>
                {
                    posts.map((post) => (

                        <div key={post.id} className="md:flex md:w-full md:m-3 md:p-3 md:flex-col md:justify-center
                            min-w-full rounded-lg border flex-col">

                            <div id="cardPost-Header" className="flex md:flex-row justify-center">

                                <div id="cardPost-Header-Author" className="md:flex md:flex-row
                                flex flex-row flex-1">
                                    {/* <img></img> */}
                                    <SquareUserRound />
                                    <h2 className="p-1 text-xl">{post.authorName}</h2>
                                </div>

                                <div id="cardPost-Header-Options" className="flex flex-none gap-3 p-2">
                                    <button onClick={() => handlePostDetails(post.id)}>Ver mais</button>
                                    <button onClick={handleOptions}>
                                        Opções
                                    </button>
                                    <div key={post.id} className={"flex flex-col " + optionsMenu}>
                                        <button>Editar</button>
                                        <button>Deletar</button>
                                    </div>

                                </div>
                            </div>

                            <div id="cardPost-Title" className="flex justify-center">
                                <p className="text-lg">{post.title}</p>
                            </div>

                            <div id="cardPost-Desc" className="flex justify-center">

                                <h3 className="p-2">{post.content}</h3>

                            </div>

                            <div id="cardPost-Reacts" className="flex flex-row">
                                <div className="p-1">
                                    <button type="button" onClick={handleLike}>
                                        <ThumbsUp />
                                    </button>
                                </div>

                                <div className="p-1">
                                    <button type="button">
                                        <MessageSquareMore />
                                    </button>
                                    {/* <textarea disabled={true}></textarea> */}
                                </div>
                            </div>
                        </div>

                    ))
                }
            </>
        )

    }

    return (
        <> Aguarde... </>
    )
}

export default PostContent