//expressモジュールを読み込む
const express = require('express');

//expressアプリを生成する
const app = express();

// webフォルダの中身を公開する
app.use(express.static('web'));

//ルート（http://localhost/）にアクセスした時にHelloを返す
app.get('/api/v1/list',(req,res)=> {
    //クライアントに送るJSONデータ
    const todoList = [
        {title: 'JavaScriptを勉強する', done: true},
        {title: 'Node.jsを勉強する', done: false},
        {title: 'Web APIを作る', done: false}
    ];
    //jsonを送信する
    res.json(todoList);
});

//ポート3000番でサーバを立てる
app.listen(3000,()=> console.log('Linstening on port 3000'));