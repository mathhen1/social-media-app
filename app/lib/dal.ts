"use server"

import { cookies } from "next/headers"

export const verifySession = async (): Promise<any> => {

    const x = (await cookies()).get("session")

    // if (x) {
    //     return { session: x, sessionStatus: "authenticated" }
    // }

    // return { session: "xxxx", sessionStatus: "unauthenticated" }

}

