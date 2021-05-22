// An editable post
import {useState} from "react"
import EditPost from "../functional/EditPost"

const Post = ({post, id, deletePost}) => {
    const [titleValue, setTitle] = useState(post.title)
    const [contentValue, setContent] = useState(post.content)
    const [showDelete, setDelete] = useState(true)

    const handleTitle = (event) => setTitle(event.target.value)
    const handleText = (event) => setContent(event.target.value)
    const titleAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full"

    return (
        <div className="w-72 h-72 bg-white m-3 overflow-y-auto rounded-md shadow-md">
            <EditPost showDelete={showDelete} setDelete={setDelete} />
            {/* Delete Overlay */}
            <div
                className={
                    showDelete
                        ? "block absolute w-72 h-72 bg-black text-white opacity-70 overflow-y-auto rounded-md shadow-md"
                        : "hidden"
                }
            >
                {" "}
                <h1 className="text-2xl text-center"> Delete this post? </h1>
                <div className="flex flex-col justify-center">
                    <button onClick={() => deletePost(post.id)}>
                        {" "}
                        Delete{" "}
                    </button>{" "}
                    <button onClick={() => setDelete(false)}>
                        {" "}
                        Cancel{" "}
                    </button>{" "}
                </div>
                {/* End of delete overlay */}
            </div>
            {/* Text Areas */}
            <div className="p-5">
                <div className=" text-2xl font-bold ">
                    <textarea
                        className={titleAreaStyle}
                        value={titleValue}
                        onChange={handleTitle}
                    />
                </div>
                <div>
                    <textarea
                        className={titleAreaStyle.concat(" text-base")}
                        value={contentValue}
                        onChange={handleText}
                    />
                </div>
            </div>
            {/* Overlay */}
        </div>
    )
}

export default Post
