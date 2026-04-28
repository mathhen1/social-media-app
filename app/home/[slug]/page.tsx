import PostComments from "./components/PostComments"
import PostDetails from "./components/PostDetails"

const SlugPage = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center w-full">
                <PostDetails />
            </div>

            <div className="flex items-center justify-center w-full ">
                <PostComments />
            </div>
        </div>
    )
}

export default SlugPage