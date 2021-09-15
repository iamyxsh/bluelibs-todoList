export default /* GraphQL */ `
  input UserUpdateInput {
    isEnabled: Boolean!
    profile: UserProfileInput!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
