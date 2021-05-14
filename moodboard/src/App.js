import "./App.css"
import {useState} from "react"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import posts from "./data/posts"

function App() {
    const postsToDisplay = posts.map((post) => (
        <Post title={post.title} content={post.content} newPost={false} />
    ))

    const [addPost, setAddPost] = useState(false)

    return (
        // <div className="h-screen bg-defaultBg">
        <div className="h-full bg-secondary">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow">
                {/* Display of all the posts */}
                <div className="flex flex-row flex-wrap ">
                    {postsToDisplay}{" "}
                    <Post
                        className={addPost ? "block" : "hidden"}
                        content={"test"}
                    />{" "}
                </div>
            </div>
            {/* Add Post floating bottom right button */}
            <AddPost setAddPost={setAddPost} addPost={addPost} />
        </div>
    )
}

export default App
