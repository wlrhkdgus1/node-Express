var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {
        'Set-Cookie':['Set-Cookie: yummy_cookie=choco','Set-Cookie: tasty_cookie=strawberry']
    });
    response.end('Cookie!!');
}).listen(3000);