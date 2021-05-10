const Post = ({caption, content}) => {
    return (
        <div className="text-left w-48 h-64 bg-secondary">
            <div className="text-2xl font-bold">{caption}</div>
            <div className="text-base ">{content}</div>
        </div>
    )
}

export default Post
