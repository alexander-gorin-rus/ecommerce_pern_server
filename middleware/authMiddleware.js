const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.header('x-auth-token')
        if (!token) {
            return res.status(401).json({message: 'Not authorized'});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({message: "Not authorized"})
    }
};