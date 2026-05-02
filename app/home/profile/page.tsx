import { CircleUserRound } from "lucide-react"
import NavBar from "../components/NavBar"
import { User } from "@/app/lib/definitions"

const ProfilePage = () => {



    return (

        <div>

            <div className="flex justify-center">
                <NavBar />
            </div>

            <div className="flex flex-row">

                <div className="info-profile">

                    <div id="info-profile-img">
                        <button>
                            <CircleUserRound style={{ width: "200", height: "200" }} />
                        </button>
                    </div>

                    <div id="info-profile-data" className="">

                        <div>
                            <h1>data example</h1>
                        </div>

                        <div>
                            <h1>data example</h1>
                        </div>

                        <div>
                            <h1>data example</h1>
                        </div>

                    </div>

                    <div id="info-profile-edit" className="">
                        <p>Editar Perfil</p>
                    </div>

                </div>

                <div className="flex profile-posts">

                </div>

            </div>

        </div>
    )

}

export default ProfilePage