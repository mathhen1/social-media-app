import NavBar from "../components/NavBar"
import PostComments from "./components/PostComments"
import PostDetails from "./components/PostDetails"

const SlugPage = () => {
    return (
        <div>
            <div className="flex justify-center">
                <NavBar />
            </div>

            <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-full">
                <PostDetails />
            </div>

            <div className="flex items-center justify-center w-full ">
                <PostComments />
            </div>
        </div>
        </div>
    )
}

export default SlugPage