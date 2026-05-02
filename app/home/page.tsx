"use client"

import NavBar from "./components/NavBar"
import PostBar from "./components/PostBar"
import PostContent from "./components/PostContent"
import SideBar from "./components/SideBar"

import { useEffect, useState } from "react"
import { getPosts } from "@/app/api/Post/postApi";
import { Post } from "@/app/lib/definitions";

const HomePage = () => {

    const [posts, setPosts] = useState<Post[]>([])

    const x = async () => {
        const y = await getPosts()
        setPosts(y)
    }

    if (posts.length === 0) {
        x()
        return (
            <div className="flex items-center justify-center min-h-screen">
                Aguarde...
            </div>
        )
    }


    return (

        <div className="md:flex md:flex-col">

            <div className="w-full flex justify-center">
                {/*  aba superior */}
                <NavBar />
            </div>

            <div className="md:flex md:flex-row gap-1 h-min-full">

                <div className="flex items-center flex-none md:h-screen sticky top-0 pr-10 pl-10">
                    {/*  aba lateral esquerda */}
                    <SideBar />
                </div>

                <div className="flex flex-1 items-center justify-center flex-col w-full md:w-340">

                    {/* parte central, onde fica os posts */}
                    {posts.map((post) => (
                        <PostContent key={post.id} post={post} />
                    ))}

                </div>

                <div className="flex items-center flex-none md:h-screen sticky top-0 pr-10 pl-10">
                    {/*  aba lateral direita */}
                    <SideBar />
                </div>

            </div>

            <div className="w-full bottom-0 border-t-2 p-2 flex-none sticky bg-slate-950">
                <PostBar />
            </div>

        </div>
    )

}

export default HomePage