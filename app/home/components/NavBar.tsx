"use client"

import { deleteCookie, getUser } from "@/app/lib/cookies"
import { Search } from "lucide-react"
import { redirect, useRouter } from "next/navigation"

const NavBar = () => {

    const router = useRouter()

    const handleProfile = () => {
        router.push("/home/profile" )
    }

    const handleExit = () => {
        deleteCookie().then(redirect("/"))

    }

    const handleHome = () => {
        router.push("/home")
    }

    return (
        <div className="flex
        md:flex-row md:gap-20 md:text-xl md:p-5 md:m-5
         flex-col gap-5 m-1 p-1 text-base font-mono">

            <button className="flex hover:border hover:p-1 hover:rounded-sm hover:p hover:scale-105 hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out"
                type="button"
                onClick={handleProfile}>Perfil</button>

            <button className="flex hover:border hover:p-1 hover:rounded-sm hover:p hover:scale-105 hover:bg-indigo-500 transition delay-100 duration-300 ease-in-out" type="button"
            onClick={handleHome}>
                Geral
            </button>

            <button className="flex hover:border hover:p-1 hover:rounded-sm hover:p hover:scale-105 hover:bg-indigo-500 transition delay-100 duration-300 ease-in-out" type="button">
                Seguindo
            </button>

            <button className="flex hover:border hover:p-1 hover:rounded-sm hover:p hover:scale-105 hover:bg-indigo-500 transition delay-100 duration-300 ease-in-out" onClick={handleExit}>
                Sair
            </button>

            <button className="flex hover:border hover:p-1 hover:rounded-sm hover:p hover:scale-105 hover:bg-indigo-500 transition delay-150 duration-300 ease-in-out">
                <Search />
            </button>
        </div>
    )

}

export default NavBar