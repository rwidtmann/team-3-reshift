const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    name: String
    password: String
  }

  type startValues {
    startTimeValue: Int
    createdAt: String
  }
  
  type endValues {
    endTimeValue: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Query {
    employees: [Employee]!
    employee(name: String): Employee
    me: Employee
    reactions: [ReactionValues]
  }

  type ReactionValues {
    startReaction: [startValues]
    endReaction: [endValues]
  }

  type Mutation {
    addEmployee(name: String!, password: String!): Employee
    login(name: String!, password: String!): Auth
    removeEmployee(name: String!): Employee
    addReactionStart(startTimeValue: Int!): startValues
    addReactionEnd(endTimeValue: Int!): endValues
  }
`;

module.exports = typeDefs;
