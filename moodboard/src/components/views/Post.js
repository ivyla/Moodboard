// An editable post
import {useState} from "react"

const Post = ({title, content, newPost}) => {
    const [titleValue, setTitle] = useState(title)
    const [contentValue, setContent] = useState(content)

    const handleTitle = (event) => setTitle(event.target.value)
    return (
        <div className="w-64 h-64 bg-white m-3 p-5 overflow-y-auto">
            <div className=" text-2xl font-bold ">
                {" "}
                <textarea
                    className="box-border break-words overflow-hidden"
                    value={titleValue}
                    onChange={handleTitle}
                />
            </div>
            <div className="text-base">{content}</div>
        </div>
    )
}

export default Post
