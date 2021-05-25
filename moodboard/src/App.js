import "./App.css"
import {useState} from "react"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import postData from "./data/posts"

function App() {
    const [posts, setPosts] = useState(postData)
    const deletePost = (id) => {
        let updatedPosts = posts.filter((post) => {
            return post.id !== id
        })
        setPosts(updatedPosts)
    }
    const addPost = () => {
        const postId = posts.length
        const newPostContent = {
            id: postId,
            title: "new title",
            content: "new post"
        }
        // This does NOT need to add the entire Post component onto the list
        let updatedPosts = posts.concat(newPostContent)
        setPosts(updatedPosts)
    }
    // Currently no filter for the posts - for now, we are rendering all of them
    const displayedPosts = posts.map((post) => (
        <Post key={post.id} id={post.id} post={post} deletePost={deletePost} />
    ))
    console.log(posts)
    return (
        <div className="h-full bg-defaultBg overflow-hidden">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow m-auto">
                {/* Display of all the posts */}
                <div className="flex flex-row flex-wrap justify-center">
                    {displayedPosts}{" "}
                </div>
            </div>
            {/* Floating bottom right button */}
            <AddPost addPost={addPost} />
        </div>
    )
}

export default App
