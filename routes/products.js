const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify([
    {
      id: 1,
      name: 'Snorkling',
      image_url: 'http://www.asliindonesia.net/wp-content/uploads/2015/03/P_20150101_1350472B-2BCopy.jpg'
    },
    {
      id: 2,
      name: 'Tracking',
      image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhft-BtLl2NRU3Q1uH4Gnis0mez35nuvLhGVZBAObDkLnq3xk'
    }
  ]));
});

module.exports = router;
