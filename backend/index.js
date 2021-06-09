const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
const PORT = 3001
const posts = [
    {
        id: 3,
        title: "First Task of the day",
        content: "My name is Ivy",
        titleFont: "5",
        contentFont: "1"
    },
    {
        id: 4,
        title: "This is what the very last text post is gonna look like.",
        content:
            "hee yaw ya hooo lets go here lim currently learning tailwind blah blha",
        titleFont: "3",
        contentFont: "3"
    },
    {
        id: 5,
        title: "This is what the very last text post is gonna look like.",
        titleFont: "3",
        contentFont: "3"
    }
]

//get
app.get("/api/posts", (request, response) => {
    response.json(posts)
})

// post

// delete

// put

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})

// Example with request params
// app.get("/api/posts/:id", (request, response) => {
//     console.log(request.params.id)
//     let incomingId = parseInt(request.params.id)
//     const tempList = posts.find((post) => post.id === incomingId)
//     response.json(tempList)
// })
