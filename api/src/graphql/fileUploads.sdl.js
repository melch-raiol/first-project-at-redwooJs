export const schema = gql`
  type FileUpload {
    id: Int!
    name: String!
    size: Int!
    type: String!
    createdAt: DateTime!
  }

  type Query {
    fileUploads: [FileUpload!]! @requireAuth
    fileUpload(id: Int!): FileUpload @requireAuth
  }

  input CreateFileUploadInput {
    name: String!
    size: Int!
    type: String!
  }

  input UpdateFileUploadInput {
    name: String
    size: Int
    type: String
  }

  type Mutation {
    createFileUpload(input: CreateFileUploadInput!): FileUpload! @requireAuth
    updateFileUpload(id: Int!, input: UpdateFileUploadInput!): FileUpload!
      @requireAuth
    deleteFileUpload(id: Int!): FileUpload! @requireAuth
  }
`
