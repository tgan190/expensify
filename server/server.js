const path = require('path');
const express = require('express');
const app = express();

// where aor files live?
// what port it should listen on?

// w.r.f server.js (__dirname is the current directory)

const publicPath = path.join (__dirname, '..', 'public');
const port = process.env.PORT || 3000;
      
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

//app.listen(3000, () => {
app.listen(port, () => {
    console.log('Server is up!');
})
