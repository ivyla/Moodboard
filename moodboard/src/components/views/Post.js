// An editable post
import {useState} from "react"

const Post = ({title, content, newPost}) => {
    const [titleValue, setTitle] = useState(title)
    const [contentValue, setContent] = useState(content)

    const handleTitle = (event) => setTitle(event.target.value)
    const handleText = (event) => setContent(event.target.value)

    const titleAreaStyle =
        "box-border break-words overflow-hidden resize-none w-full"
    return (
        <div className="w-72 h-72 bg-white m-3 p-5 overflow-y-auto rounded-md shadow-md">
            <div className=" text-2xl font-bold ">
                {" "}
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
    )
}

export default Post
