// An editable post
import {useState} from "react"
import EditPost from "../functional/EditPost"
import DeletePost from "../functional/DeletePost"
import TextareaAutosize from "react-textarea-autosize"
import Minimize from "../../icons/Minimize"

// Tailwinds Sizes
const contentFontRef = new Map([
    [1, "text-xs"],
    [2, "text-sm"],
    [3, "text-base"],
    [4, "text-lg"],
    [5, "text-xl"]
])

const Post = ({post, id, selected, setSelected, deletePost, updatePost}) => {
    const [titleValue, setTitle] = useState(post.title)
    const [contentValue, setContent] = useState(post.content)
    const [showDelete, setDelete] = useState(false)
    // Toggles between display mode of text posts
    const [enableTextEdit, setTextEdit] = useState(false)
    const [titleFont, setTitleFont] = useState("text-2xl")
    const [contentFont, setContentFont] = useState(3)

    const handleTitle = (event) => setTitle(event.target.value)
    const handleText = (event) => setContent(event.target.value)
    const handleContentSlider = (event) => setContentFont(event.target.value)
    const titleAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full " + titleFont
    const contentAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full " +
        contentFontRef.get(parseInt(contentFont))
    console.log(contentFont, typeof contentFont)
    console.log(contentFontRef.get(contentFont))
    console.log(contentAreaStyle)

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
            className={contentAreaStyle}
            value={contentValue}
            onChange={handleText}
            disabled={!enableTextEdit}
        />
    ) : null

    return (
        <div className="flex flex-row">
            <div className=" w-64 h-72 bg-white m-3 mr-0 overflow-y-auto rounded-md shadow-md ">
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
                    <div className="font-bold ">{titleDisplay}</div>
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
                <div className="px-2">
                    <h3> Title Size </h3>
                    <input type="range" />
                    <h3> Content Size </h3>
                    <input
                        type="range"
                        min="1"
                        max="5"
                        step="1"
                        onChange={handleContentSlider}
                        value={contentFont}
                    />
                </div>
                <button
                    className="btn-confirm"
                    onClick={() =>
                        updatePost(id, {
                            id: id,
                            title: titleValue,
                            content: contentValue
                        })
                    }
                >
                    {" "}
                    Save{" "}
                </button>
            </div>
        </div>
    )
}

export default Post
