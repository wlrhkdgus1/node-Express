var http = require('http');
var cookie = require('cookie');
http.createServer(function(request, response){
    console.log(request.headers.cookie);
    var cookies = {};
    if(request.headers.cookie !== undefined){
        cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
        'Set-Cookie':['yummy_cookie=choco',
        'tasty_cookie=strawberry',
/*쿠키가 살아있는 시간을 정할수있음 초단위이며 한달동안일떄
 `Permanent=cookies; Max-Age=${60*60*24*30}`*/
        'Secure=Secure; Secure',
        'HttpOnly=HttpOnly; HttpOnly',
        'Path=Path; Path=/cookie', //어느패쓰에서동작할것인가 제한
        'Domain=Domain; Domain=o2.org' //어떤도메인에서 동작할것인가 제한 
        ]
    });
    response.end('Cookie!!');
}).listen(3000);