"use client"

import { useActionState } from "react"
import { validatorRegister } from "../actions/auth"

const RegisterPage = () => {

    const [state, action, pending] = useActionState(validatorRegister, undefined)

    return (
        <>
            <form className="flex flex-col items-center border border-white rounded-lg px-3 py-3 mx-3 my-3 tracking-[1]"
                action={action}
            >
                <div className="border border-gray rounded-lg px-3 py-3 mx-3 my-3">
                    <label htmlFor="username">Nome de Usuario:</label>
                    <input id="username"
                        name="username"
                        type="text"
                        placeholder=" Digite seu nome"
                        className="">
                    </input>
                </div>
                {state?.errors?.username && <p>{state.errors.username}</p>}

                <div className="border border-gray rounded-lg px-3 py-3 mx-3 my-3">
                    <label htmlFor="password">Senha:</label>
                    <input id="password"
                        name="password"
                        type="text"
                        placeholder=" Digite sua senha"
                        className="">
                    </input>
                </div>

                {state?.errors.password && (
                    <div>
                        <p>A senha é obrigatoria.</p>
                        <ul>
                            {state.errors.password.map((err) => (
                                <li key={err}>
                                    {err}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <button disabled={pending} type="submit">Enviar</button>
            </form>
        </>
    )

}

export default RegisterPage