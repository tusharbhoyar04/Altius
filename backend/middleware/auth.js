const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {
   
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }

    try {
       
        const decoded = jwt.verify(token,"abhay");

        // Attach user info to request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // Handle token verification errors
        return res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = auth;
