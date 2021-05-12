const Post = ({title, content}) => {
    return (
        <div className="w-64 h-64 bg-white m-3 p-5 overflow-y-auto">
            <div className=" text-2xl font-bold ">{title}</div>
            <div className="text-base">{content}</div>
        </div>
    )
}

export default Post
