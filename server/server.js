const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const marked = require('marked');
const fs = require('fs');

const {mongoose} = require('./db/mongoose');
const {Path} = require('./models/path');

const app = express();
const readme = fs.readFileSync('./README.md').toString();
const index = marked(readme);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(index);
});

app.get('/new/:url(*)', (req, res) => {
  var url = req.params.url;
  if (!validUrl.isUri(url)){
    return res.status(400).send({
      error: 'Invalid URL.'
    });
  }

  Path.findOne({originalUrl: url}).then(path => {
    if (path) {
      res.send({
        original_url: path.originalUrl,
        short_url: `${req.protocol}://${req.headers.host}/${path.shortCode}`
      });
    } else {
      console.log('URL: ', url);
      newPath = new Path({
        originalUrl: url,
        shortCode: shortid.generate()
      });

      newPath.save().then(path => {
        res.send({
          original_url: path.originalUrl,
          short_url: `${req.protocol}://${req.headers.host}/${path.shortCode}`
        });
      }).catch(e => {
        console.log(e);
        res.status(400).send({
          error: 'Unable to generate short URL.'
        });
      });
    }
  }).catch(e => {
    return res.status(400).send({
      error: 'Server unavailable.'
    });
  });
});

app.get('/:code', (req, res) => {
  var code = req.params.code;
  Path.findOne({shortCode: code}).then(path => {
    if (path) {
      res.redirect(path.originalUrl);
    } else {
      res.status(404).send({
        error: 'URL not found.'
      });
    }
  }).catch(e => {
    res.status(400).send({
      error: 'Unable to get URL.'
    });
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
