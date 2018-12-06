const typeDefs = `
    type User {
        id: String!
        name: String!
        provider: String!
    },
    type Post {
        title: String!
        author: String!
        content: String!
    },
    type Comment {
        author: String!
    }
    type Query {
        user(id: String, provider: String): User
        posts: [Post]
    },
    type Mutation {
        login(id: String!, name: String!, provider: String!): User
    }
`

export default typeDefs;