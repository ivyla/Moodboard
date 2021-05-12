import "./App.css"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import posts from "./data/posts"

function App() {
    const postsToDisplay = posts.map(
        (post) => <Post title={post.title} content={post.content} />
        // console.log(post.title)
    )
    console.log(postsToDisplay)
    return (
        // <div className="h-screen bg-defaultBg">
        <div className="h-full bg-secondary">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow">
                {/* Display of all the posts */}
                <div className="flex flex-row flex-wrap ">{postsToDisplay}</div>
            </div>
            {/* Add Post floating bottom right button */}
            <AddPost />
        </div>
    )
}

export default App
