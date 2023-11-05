import express from 'express'


const app = express()
app.get("/", (req, res) => {
    res.send("server is ready");
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
});

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "a joke",
            content:"This is a joke"
        },
        {
            id: 2,
            title: "another joke",
            content:"This is another joke joke"
        },
        {
            id: 3,
            title: "3rd joke",
            content:"This is third joke"
        }
    ]
    res.send(jokes)
})