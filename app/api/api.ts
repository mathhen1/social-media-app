const createUser = async (data: Object): Promise<any> => {

    try {
        const res = await fetch("http://localhost:4000/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        })

        return res.json()
    } catch (err) {
        throw err
    }

}

const verifyUser = async (data: Object): Promise<any> => {

    try {
        const res = await fetch("http://localhost:4000/validate-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        })

        return res.json()

    } catch (err) {
        throw err
    }

}

const decode = async (codeData: string | undefined = ""): Promise<any> => {
    try {
        if (codeData === "") { return }
        const r = await fetch("http://localhost:4000/decode", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: codeData })
        })

        return r.json()

    } catch (err) {
        throw err
    }

}




export { createUser, verifyUser, decode }

