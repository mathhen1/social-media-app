"use server"
import { cookies } from "next/headers"



export const deleteCookie = async () => {
    const cookie = await cookies()

    if (cookie.get("session")) {
        cookie.delete("session")
        cookie.delete("nickname")
        cookie.delete("password")
    }
}

export const getUser = async () => {

    const cookie = await cookies()

    if(cookie.get("username")) {
        return cookie.get("username")
    }

}