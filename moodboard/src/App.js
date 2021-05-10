import "./App.css"
import AddPost from "./components/functional/AddPost"
import NavBar from "./components/NavBar"
import Post from "./components/views/Post"
const posts = [
    {
        id: 1,
        title: "Hello world",
        caption: "This is the very first moodboard post"
    },
    {
        id: 2,
        title: "Nam dictum nulla",
        caption:
            "Aenean consequat quam vel tincidunt elementum. Etiam convallis diam vulputate, fringilla massa a, mollis quam. Phasellus a bibendum risus, id semper est. "
    },
    {
        id: 3,
        title: "First Task of the day",
        caption:
            "Get ready in the morning. Praesent pellentesque eget ipsum vel bibendum."
    },
    {
        id: 4,
        title: "This is what the very last text post is gonna look like.",
        caption:
            "hee yaw ya hooo lets go here lim currently learning tailwind blah blha"
    }
]

function App() {
    // const postsToDisplay = posts.forEach((post) => )
    return (
        <div bg-gray-800>
            <NavBar />
            <Post caption="hello" content="world" />
            <div className="container object-right-bottom">
                <AddPost />
            </div>
        </div>
    )
}

export default App
