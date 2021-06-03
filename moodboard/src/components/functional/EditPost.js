const EditPost = ({setDelete, showDelete, selected, setSelected, postId}) => {
    const handleDeleteClick = () => {
        setDelete(!showDelete)
    }

    const handleEditClick = () => {
        if (selected === postId) {
            setSelected(-1)
        } else {
            setSelected(postId)
        }
    }
    const staticButtonStyle =
        "bg-white h-10 w-10 rounded-full flex justify-center m-1 shadow-md"
    return (
        <div className="relative opacity-0 hover:opacity-100">
            <div className="absolute right-0 w-32 h-20 flex justify-center py-2">
                <div className={staticButtonStyle} onClick={handleEditClick}>
                    {/* Edit Button */}
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Delete Button */}
                <div className={staticButtonStyle}>
                    <button onClick={handleDeleteClick}>
                        {" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>{" "}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditPost
