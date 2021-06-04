import "./App.css"
import {useState, useEffect} from "react"
import postService from "./services/posts"
// Components
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
import CircularButton from "./components/reusable/CircularButton"
import TextareaAutosize from "react-textarea-autosize"

// icons
import AddIcon from "./icons/AddIcon"
import ChangeBg from "./icons/ChangeBg"

function App() {
    const [posts, setPosts] = useState([])
    const [selected, setSelected] = useState(-1)
    const [title, setTitle] = useState("Add a title")

    useEffect(() => {
        postService.getAll().then((initialPosts) => setPosts(initialPosts))
    }, [])
    const deletePost = (id) => {
        console.log("deleting ", id)
        let updatedPosts = posts.filter((post) => {
            return post.id !== id
        })
        postService.deletePost(id).then((response) => {
            setPosts(updatedPosts)
        })
    }

    const addPost = () => {
        const postId = posts[posts.length - 1].id + 1
        const newPostContent = {
            id: postId,
            title: "Add a title",
            content: "Add content"
        }
        postService.newPost(newPostContent).then((response) => {
            setPosts([...posts, newPostContent])
            console.log(response.data)
        })
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

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    return (
        <div className="h-screen bg-defaultBg overflow-x-hidden">
            <NavBar />
            {/* Container for posts interface */}
            <div className="block w-screen">
                {/* Display of all the posts */}
                <div className="w-screen">
                    <TextareaAutosize
                        className="block text-2xl text-center m-auto py-2 my-2 w-5/12"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
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
