const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const myInfo = {
        name: "조준영",
        studentId: "202508071",
        department: "정보통신학과"
    };

    res.render('index', myInfo);
});

app.listen(3000, () => {
    console.log('서버가 실행되었습니다. 브라우저에서 http://localhost:3000 으로 접속하세요.');
});