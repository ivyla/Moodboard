// An editable post
import {useState} from "react"
import EditPost from "../functional/EditPost"

const Post = ({post, id, deletePost, selected, setSelected}) => {
    const [titleValue, setTitle] = useState(post.title)
    const [contentValue, setContent] = useState(post.content)
    const [showDelete, setDelete] = useState(false)

    const handleTitle = (event) => setTitle(event.target.value)
    const handleText = (event) => setContent(event.target.value)
    const titleAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full"

    const titleDisplay = titleValue ? (
        <textarea
            className={titleAreaStyle}
            value={titleValue}
            onChange={handleTitle}
        />
    ) : null

    const contentDisplay = contentValue ? (
        <textarea
            className={titleAreaStyle.concat(" text-base")}
            value={contentValue}
            onChange={handleText}
        />
    ) : null

    console.log("selected: ", selected)
    return (
        <div className="w-72 h-72 bg-white m-3 overflow-y-auto rounded-md shadow-md ">
            <EditPost
                showDelete={showDelete}
                setDelete={setDelete}
                selected={selected}
                setSelected={setSelected}
                postId={id}
            />
            {/* Delete Overlay */}
            <div
                className={
                    showDelete
                        ? "block absolute pt-16 w-72 h-72 bg-black text-white opacity-70 overflow-y-auto rounded-md shadow-md"
                        : "hidden"
                }
            >
                <h1 className="text-2xl text-center m-4">Delete this post?</h1>
                <div className="flex flex-row space-evenly justify-center space-x-4">
                    <button
                        className="btn-delete"
                        onClick={() => deletePost(post.id)}
                    >
                        Delete
                    </button>
                    <button
                        className="btn-neutral"
                        onClick={() => setDelete(false)}
                    >
                        Cancel
                    </button>
                </div>
                {/* End of delete overlay */}
            </div>
            {/* Text Areas */}
            <div className="p-5">
                <div className=" text-2xl font-bold ">{titleDisplay}</div>
                <div>{contentDisplay}</div>
            </div>

            {/* Overlay */}
        </div>
    )
}

export default Post
