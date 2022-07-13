const postsResolvers = require('./post');
const usersResolvers = require('./Users');
// const commentsResolvers = require('./comments');



module.exports = {
    Query:{
        ...postsResolvers.Query
    },
    Mutation:{
        ...usersResolvers.Mutation
    }
}
