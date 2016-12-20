var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 var articles = {
     'articleone' : {
     title : 'article-one',
     heading : 'article-one',
     date : 'sep 05',
     content : 
         `<p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p> `
 },
     'articletwo' : {
          title : 'article-two',
     heading : 'article-two',
     date : 'sep 10',
     content : 
         `<p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p> `
     },
     'articlethree' : {
          title : 'article-three',
     heading : 'article-three',
     date : 'sep 15',
     content : 
         `<p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p>
              <p>
                 hello this is my  first article. hello this is my  first article hello this is my  first article. hello this is my  first article hello this is my  first article hello this is my  first article hello this is my  first article
             </p> `
     }
 }
 
 function createTemplate(data)
 {
 var title = data.title;
 var date = data.date;
 var heading=data.heading;
 var content=data.content;
 var htmlTemplate = 
 `<html>
     <head>
          <title>
          ${title}
          </title>
          <link href=" /ui/style.css" rel="stylesheet"/>
     </head>
     <body>
         <div>
             <a href='/'>home</a>
             <hr/>
             <h2>
                ${heading}
             </h2>
             <h4>
               ${date}
             </h4>
         </div>
         <div class="container">
            ${content}
         </div>
     </body>
 </html>`;
 return htmlTemplate;
 }
 
 
 app.get('/:articleName', function (req, res) {
     var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
 });
 app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
 });
 app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
 });
 
 app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
 
 app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
 });
 
 
 var port = 8080; // Use 8080 for local development because you might already have apache running on 80
  app.listen(8080, function () {
    console.log(`IMAD course app listening on port ${port}!`);
  });