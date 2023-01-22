const fs = require("fs") ;
const http = require('http') ;

 const server =http.createServer( (req, res) => {
    res.writeHead(200,{'content-type':'text/html'})
    fs.readFile('index.html', null , function(err,data){
        if(err){
            res.writeHead(404)
            res.write('file not found')
        }else{
            res.write(data)
        }
        res.end()
    })
    

});

server.listen(3023, () => {
    console.log("server running")
});
