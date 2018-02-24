var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
    'article-one': {
    title: 'Article one  | Soumen Baidya',
    heading: 'Article one',
    date: 'Feb 20, 2018',
    content: `
    <p>
        This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.
    </p>
    <p>
        This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.
    </p>
    <p>
        This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.This is the contest for my first article.
    </p>`
    
},
    'article-two': {
    title: 'Article Two  | Soumen Baidya',
    heading: 'Article Two',
    date: 'Feb 24, 2018',
    content: `
    <p>
        This is the contest for my Two article.This is the contest for my Second article.
    </p>`
},
    'article-three': {
        title: 'Article Three  | Soumen Baidya',
    heading: 'Article Three',
    date: 'Feb 30, 2018',
    content: `
    <p>
        This is the contest for my Third article.
    </p>`
    }
}; 

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;


var htmlTemplate =`
    <!DOCTYPE html>
<html>
    <head>
        ${title}
        <meta name="viewport" content="width-device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    // articleNmae == article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
/*------------------------------
---------------------------------------
app.get('/article-two', function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '/ui/article-two/article-four.html'));
});
------------------

--------------------
*/ 
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
