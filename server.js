var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
title: "Article One| Sankar",
heading: "Article One",
date: "August 29, 2017",
content: '<p>This is a paragraph of the article.</p>'

};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
         <style> <link href="/ui/style.css" rel="stlyesheet" /> </style>
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
    <div>
        <h2>${heading}</h2>
    </div>    
    <p>${date}<p>
    <p>${content}</p>
    </div>
     </body>
</html>
`;
return htmlTemplate;
}

var articleTwo= {
title: "Article Two| Sankar",
heading: "Article Two",
date: "August 29, 2017",
content: '<p>This is a paragraph of the article.</p>'

};

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
    <title>${title}</title>
   <link href="/ui/style.css" rel="stlyesheet" />
    </head>
        <>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
    <div>
        <h2>${heading}</h2>
    </div>    
    <p>${date}<p>
    <p>${content}</p>
    </div>
     </body>
</html>
`;
return htmlTemplate;
}

var articleThree= {
title: "Article Three| Sankar",
heading: "Article Three",
date: "August 29, 2017",
content: '<p>This is a paragraph of the article.</p>'

}; 

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
    <title>${title}</title>
       <link href="/ui/style.css" rel="stlyesheet" />
    </head>
        <>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
    <div>
        <h2>${heading}</h2>
    </div>    
    <p>${date}<p>
    <p>${content}</p>
    </div>
     </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function(req, res) {
 res.send(createTemplate(articleTwo));
});

app.get('/article-three', function(req, res) {
 res.send(createTemplate(articleThree));
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
