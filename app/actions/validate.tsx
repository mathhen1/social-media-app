import { FormState, RegisterFormSchema } from "../lib/definitions";
import { verifyUser } from "../api/api";
import { redirect } from "next/navigation";
import middleware from "../../proxy";
import { useRouter } from "next/router";

export async function validatorLogin(state: FormState, formData: FormData) {

    const dataValidated = RegisterFormSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password")
    })

    if (!dataValidated.success) {
        return {
            errors: dataValidated.error.flatten().fieldErrors
        }
    }

    const { username, password } = dataValidated.data

    const res: any = await verifyUser({ username, password })

    if (res.messageError) { return {errorPw : res.messageError} }

    window.location.reload()

}