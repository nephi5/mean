const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));
router.all('/test', (req, res) => {
  console.log('test');
  res.send({ ok: 'ok' });
  console.log('change');
});

router.get('/another-test', (req, res) => {
  res.send({ hello: 'world', name: 'Nephi Szvoboda', age: 28 });
});

router.use('/auth', authRoutes);
router.use('/user', userRoutes);

module.exports = router;
