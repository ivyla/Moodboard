import "./App.css"
import {useState, useEffect} from "react"
import axios from "axios"
// Components
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
// import postData from "./data/posts"
import CircularButton from "./components/reusable/CircularButton"

// icons
import AddIcon from "./icons/AddIcon"
import ChangeBg from "./icons/ChangeBg"

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then((response) => {
            console.log("promise fulfilled")
            setPosts(response.data)
        })
    }, [])
    // Selected will be the postId
    const [selected, setSelected] = useState(-1)

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
        <Post
            key={post.id}
            id={post.id}
            post={post}
            deletePost={deletePost}
            selected={selected}
            setSelected={setSelected}
        />
    ))

    return (
        <div className="h-full bg-defaultBg overflow-hidden">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen flex flex-column flex-grow m-auto">
                {/* Display of all the posts */}
                <div className="flex  flex-row flex-wrap justify-center">
                    {displayedPosts}{" "}
                </div>
            </div>
            {/* Floating bottom right button */}
            <div className="flex flex-row fixed right-0 bottom-0 mx-5 my-2 space-x-4">
                <CircularButton action={addPost} image={<AddIcon />} />
                <CircularButton action={addPost} image={<ChangeBg />} />

                {/* <CircularButton action={null}  /> */}
            </div>
        </div>
    )
}

export default App
