const logMiddleware = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    console.log(method +' '+ url + ' ' + new Date());
    next()
};

module.exports = logMiddleware;