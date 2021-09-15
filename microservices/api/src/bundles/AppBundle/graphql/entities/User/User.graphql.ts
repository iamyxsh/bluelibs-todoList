export default /* GraphQL */ `
  type User {
    _id: ObjectId
    createdAt: Date!
    email: String
    fullName: String
    isEnabled: Boolean!
    profile: UserProfile!
    roles: [UserRoles]
  }

  type UserProfile {
    firstName: String!
    lastName: String!
  }

  enum UserRoles {
    USER
    ADMIN
  }
`;
