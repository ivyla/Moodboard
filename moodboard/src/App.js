import "./App.css"
import {useState} from "react"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import postData from "./data/posts"

function App() {
    // const postsToDisplay = ))

    const [postsToDisplay, setPosts] = useState(
        postData.map((post) => (
            <Post title={post.title} content={post.content} newPost={false} />
        ))
    )

    const [addPost, setAddPost] = useState(false)

    return (
        <div className="h-full bg-defaultBg overflow-hidden">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow m-auto">
                {/* Display of all the posts */}
                <div className="flex flex-row flex-wrap justify-center">
                    {postsToDisplay}{" "}
                    {addPost && (
                        <Post
                            className={addPost ? "block" : "hidden"}
                            content={"test"}
                        />
                    )}
                </div>
            </div>
            {/* Add Post floating bottom right button */}
            <AddPost
                setAddPost={setAddPost}
                addPost={addPost}
                postsToDisplay={postsToDisplay}
                setPosts={setPosts}
            />
        </div>
    )
}

export default App
