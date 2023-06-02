const { ObjectId } = require("mongodb")
const { getPostById } = require("./services/posts")


function checkBody(req, res, next) {
    if (!req.body) {
        return res.status(400).json({
            message: "no_body"
        })
    }
    next()
}
async function checkId(req, res, next) {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(404).json({
            message: "not_found"
        })
    }

    const post = getPostById(req.params.id)
    if (!post) {
        return res.status(404).json({
            message: "not_found"
        })
    }
    next()
}

module.exports = { checkBody, checkId }