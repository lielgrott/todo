const { isMongoId } = require('validator');

const idValidation = (req, res, next) => {
    const { id } = req.params;
    if (!isMongoId(id)) {
        res.status(400);
    next()
    }
}

module.exports = idValidation;