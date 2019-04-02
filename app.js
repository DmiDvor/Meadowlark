const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

// 404
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Страница не найдена');
});

// 500
app.use(function(err, req, res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Ошибка сервера');
});
app.listen(app.get('port'), () => {
    console.log('Express запущен на http://localhost:' + app.get('port'));
});