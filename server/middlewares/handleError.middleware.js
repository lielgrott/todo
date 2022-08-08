const handleErrorMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500)
    res.send('Internal server error');
};

module.exports = handleErrorMiddleware;