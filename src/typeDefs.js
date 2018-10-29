const typeDefs = `
    type User {
        id: String!
        name: String!
        provider: String!
    },
    type Query {
        hello(name: String): String
    },
    type Mutation {
        SignUp(id: String!, name: String!, provider: String!): User
    }
`

export default typeDefs;