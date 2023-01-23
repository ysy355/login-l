const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    console.log(name)

    if(name == "cat"){
        res.send({'sound' : '야옹'})
    } else if(name == "dog"){
        res.send({'sound' : '야옹'})
    } else {
        res.send({'sound' : '모름'})
    }
    
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var http = require('http');
var fs = require('fs');
var url = require('url');

var _app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var path_name = url.parse(_url, true).pathname;
    var title = queryData.id;



    console.log(url.parse(_url, true));



    if(path_name == '/'){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
    
            var template = `
        <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=css">CSS</a></li>
        <li><a href="/?id=javascript">JavaScript</a></li>
      </ul>
 
    </body>
    </html>
        `;
        response.writeHead(200);
        response.end(template);
        })

    } else {
        response.writeHead(404);
        response.end(notfound);
    }

    
 
});
_app.listen(3000);
