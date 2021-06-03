// An editable post
import {useState} from "react"
import EditPost from "../functional/EditPost"
import DeletePost from "../functional/DeletePost"
import TextareaAutosize from "react-textarea-autosize"
import Minimize from "../../icons/Minimize"

const Post = ({post, id, deletePost, selected, setSelected}) => {
    const [titleValue, setTitle] = useState(post.title)
    const [contentValue, setContent] = useState(post.content)
    const [showDelete, setDelete] = useState(false)
    // Toggles between display mode of
    const [enableTextEdit, setTextEdit] = useState(false)

    const handleTitle = (event) => setTitle(event.target.value)
    const handleText = (event) => setContent(event.target.value)
    const titleAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full "

    const titleDisplay = titleValue ? (
        <TextareaAutosize
            className={titleAreaStyle}
            value={titleValue}
            onChange={handleTitle}
            disabled={!enableTextEdit}
        />
    ) : null

    const contentDisplay = contentValue ? (
        <TextareaAutosize
            className={titleAreaStyle.concat(" text-base")}
            value={contentValue}
            onChange={handleText}
            disabled={!enableTextEdit}
        />
    ) : null

    return (
        <div className="flex flex-row">
            <div className="aboslute w-72 h-72 bg-white m-3 mr-0 overflow-y-auto rounded-md shadow-md ">
                <EditPost
                    showDelete={showDelete}
                    setDelete={setDelete}
                    selected={selected}
                    setSelected={setSelected}
                    postId={id}
                    enableTextEdit={enableTextEdit}
                    setTextEdit={setTextEdit}
                />
                <DeletePost
                    showDelete={showDelete}
                    setDelete={setDelete}
                    deletePost={deletePost}
                    postId={id}
                />

                {/* Text Areas */}
                <div className="p-5">
                    <div className=" text-2xl font-bold ">{titleDisplay}</div>
                    <div>{contentDisplay}</div>
                </div>

                {/* Overlay */}
            </div>
            {/* Popup window for each post, part of flex flex-row */}
            <div
                className={
                    selected === id
                        ? "w-72 h-72 bg-white m-3 ml-0 overflow-y-auto rounded-md shadow-md"
                        : "hidden"
                }
            >
                {/* Top bar */}
                <div className="flex flex-row justify-between w-full bg-primary px-2">
                    <div className="text-xl text-white p-2">
                        <h1 className=""> Edit Post </h1>
                    </div>
                    <button onClick={() => setSelected(-1)}>
                        <Minimize />
                    </button>
                </div>
                {/* <button className="btn-confirm"> Save </button> */}
            </div>
        </div>
    )
}

export default Post
