import express from "express";
import bodyParser from "body-parser";
const app =express();
const port = 3000;

let posts=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",(req,res) => {
        res.render("index.ejs",{
            posts : posts
        });
})

app.get("/compose",(req,res) => {
    res.render("compose.ejs");
})

app.post('/compose', (req, res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postContent
    };
    posts.push(post);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server is running on ${port}.`);
});