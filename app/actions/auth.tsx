"use client"
import { RegisterFormSchema, FormState } from "../lib/definitions";
import { createUser } from "../api/api";

export async function validatorRegister(state: FormState, formData: FormData) {

    const validatedFields = RegisterFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const { username, password } = validatedFields.data

    await createUser({ username, password })

    window.location.reload()

}
