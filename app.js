const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();
const host = "localhost";
const port = 3000;

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');


app.get('/', (req, res) => {
    res.render('index.twig', {title: "Project Blog"});
})

app.get('/blog', (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(resAxios => {
               res.render('posts.twig', { posts: resAxios.data });
    })
})

app.get('/blog/:id', (req, res) => {
    res.render('post.twig', post);
})

app.get('/services/:id', (req, res) => {
    res.send('<html><body>Mes services</body></html>');
})

app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
})
