const DeletePost = ({showDelete, setDelete, deletePost, postId}) => {
    return (
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
                    onClick={() => deletePost(postId)}
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
    )
}

export default DeletePost
