import { NextRequest, NextResponse } from "next/server"
import { decode } from "./app/api/api"

const publicRoutes = ["/login", "/register", "/"]
const privateRoutes = ["/home"]

export default async function proxy(req: NextRequest) {

    const path = req.nextUrl.pathname
    const isPrivateRoute = privateRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const session = req.cookies.get("session")?.value
    // const session = JSON.stringify(cookies)

    // console.log("finalmente passei aq ", session)
    // console.log("path: aaaaa, ", path)

    // if (session) {
    const x = await decode(session)

    if (isPrivateRoute && !x?.userId) {
        // redireciona o user pro login caso nao auth
        return NextResponse.redirect(new URL("/login", req.nextUrl))
    }

    if (isPublicRoute && x?.userId && !path.startsWith("/home")) {
        // redireciona caso auth
        return NextResponse.redirect(new URL("/home", req.nextUrl))
    }

    // }


    return NextResponse.next()
}