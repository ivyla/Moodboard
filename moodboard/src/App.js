import "./App.css"
import {useState} from "react"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import postData from "./data/posts"

function App() {
    const [addPost, setAddPost] = useState(false)
    const [posts, setPosts] = useState(postData)
    const deletePost = (id) => {
        console.log(`hello ${id}`)
        let updatedPosts = posts.filter((post) => {
            console.log(post.key)
            return post.id !== id
        })
        setPosts(updatedPosts)
    }
    // Currently no filter for the posts - for now, we are rendering all of them
    const displayedPosts = posts.map((post) => (
        <Post
            key={post.id}
            post={post}
            posts={posts}
            setPosts={setPosts}
            deletePost={deletePost}
        />
    ))
    return (
        <div className="h-full bg-defaultBg overflow-hidden">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow m-auto">
                {/* Display of all the posts */}
                <div className="flex flex-row flex-wrap justify-center">
                    {displayedPosts}{" "}
                    {/* {addPost && (
                        <Post
                            className={addPost ? "block" : "hidden"}
                            content={"test"}
                        />
                    )} */}
                </div>
            </div>
            {/* Add Post floating bottom right button */}
            <AddPost
                setAddPost={setAddPost}
                addPost={addPost}
                setPosts={setPosts}
            />
        </div>
    )
}

export default App
