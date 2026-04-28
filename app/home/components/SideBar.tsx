"use client"

import { usePathname } from "next/navigation"

const SideBar = () => {

    const path = usePathname().split("/")

    return (
        <div className="md:flex md:flex-col md:block hidden">
            <button className="capitalize">{path}</button>
            <button>Tema</button>
            <button>Configurações</button>
        </div>
    )
}

export default SideBar