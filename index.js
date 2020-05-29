const express = require('express');
const app = express();
app.get('/',(reg,res) => { res.send('hello from server') });
app.listen(80,console.log('connected'));
