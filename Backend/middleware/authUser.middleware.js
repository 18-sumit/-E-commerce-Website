// this is to authenticate user , whenever user will try to : addProduct in cart and updateCart Data.

import jwt from 'jsonwebtoken'


const authUser = async (req, res, next) => {

    const { accessToken } = req.headers;

    if (!accessToken) {
        return res.
            json({
                success: false,
                message: "User not Authorized , please login again"
            })
    }

    try {
        // Verify the JWT token
        const decoded_accessToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

        // Add the user ID to the request body for further use
        req.body.userId = decoded_accessToken.id

        // Proceed to the next middleware/route handler
        next()

    } catch (error) {
        console.log("Token verification error:", error);
        let errorMessage = "Invalid token";
        let statusCode = 401

        // Specific error handling for expired tokens
        if (error.name === 'TokenExpiredError') {
            errorMessage = "Token has expired . Please Login again"
        }

        res.status(statusCode).json({
            success: false,
            message: errorMessage
        })
    }
}

export default authUser;