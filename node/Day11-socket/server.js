// server.js

var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(3000);

function handler (req, res){
    fs.readFile('index.html', function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
        }
        res.writeHead(200);
        res.end(data);
    });
}

io.on('connection', function(socket){       // socket 기본 이벤트, 웹사이트 열면 자동 발생 / 클라이언트 관련 이벤트 작성
    socket.emit('news', {serverData : "서버 작동"});    // event 발생시키는 함수 / 클라이언트의 이벤트 리스너에서 처리
        // news 이벤트 발생시킴
    socket.on('client login', function (data){  // client login 이벤트 생성, 콘솔에 data 기록
        console.log(data);
    });

    socket.on('disconnect' , function (){   // 사용자 접속 종료 시 자동 발생 / 개별 클라이언트이므로 socket
        console.log('접속이 종료되었습니다.');
    });

});

// io.emit -> 모든 클라이언트에게 이벤트 전달
