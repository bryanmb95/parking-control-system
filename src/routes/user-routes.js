module.exports = (express) => {
    const router = express.Router(); // eslint-disable-line   
    router.get('/', (req, res) => {
     res.send('Hello, I`m on!');
    });
    return router;
   };