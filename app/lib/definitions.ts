import z from "zod"

export const RegisterFormSchema = z.object({
    username: z.string()
        .min(3, { error: "Seu usuario tem que ter ao menos 3 caracteres." })
        .max(10, { error: "Seu usuario não pode passar de 10 caracteres" })
        .trim(),

    password: z.string()
        .min(8, { error: 'Senha deve ter no minimo 8 caracteres' })
        .regex(/[a-zA-Z]/, { error: 'Pelo menos uma letra Maiuscula.' })
        .regex(/[0-9]/, { error: 'Pelo menos um numero.' })
        .regex(/[^a-zA-Z0-9]/, {
            error: 'Pelo menos um caracter especial.',
        })
        .trim()
})

export type FormState =
    | {
        errors?: {
            username?: string[],
            password?: string[],
        }
        message?: string,
    } | undefined

export interface UserInterface {
    username: String,
    password: String
}

export type Post = {
    id: string,
    title: string,
    content: string,
    published: boolean,
    authorid: string,
    authorName: string
}



// export type userSession = {
//     sessionStatus: string,
//     session: string
// }