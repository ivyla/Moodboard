const express = require("express")
const app = express()
const PORT = 3001
const posts = [
    {
        id: 3,
        title: "First Task of the day",
        content:
            "Get ready in the morning. Praesent pellentesque eget ipsum vel bibendum."
    },
    {
        id: 4,
        title: "This is what the very last text post is gonna look like.",
        content:
            "hee yaw ya hooo lets go here lim currently learning tailwind blah blha"
    },
    {
        id: 5,
        title: "This is what the very last text post is gonna look like."
    }
]

app.get("/", (request, response) => {
    response.send("<h1> Hello wsssorld! </h1>")
})

app.get("/api/posts", (request, response) => {
    response.json(posts)
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
