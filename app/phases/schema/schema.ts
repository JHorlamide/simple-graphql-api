import { gql } from "apollo-server-express"

// Define the schema using the schema language
export const typeDefs = gql`
  type Task {
    id: ID!
    title: String!
    description: String!
    completed: Boolean!
  }

  type Phase {
    id: ID!
    title: String!
    tasks: [Task!]!
    completed: Boolean!
  }

  type Query {
    phase(id: ID!): Phase
    phases: [Phase!]!
  }

  type Mutation {
    createPhase(title: String!, tasks: [TaskInput!]!): Phase
    updatePhase(id: ID!, title: String, tasks: [TaskInput!]): Phase
    deletePhase(id: ID!): Boolean
    markTaskAsDone(phaseId: ID!, taskId: ID!): Task
    reopenTask(phaseId: ID!, taskId: ID!): Task
  }

  input TaskInput {
    title: String!
    description: String
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;
