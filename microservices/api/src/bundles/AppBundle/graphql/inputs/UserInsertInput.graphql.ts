export default /* GraphQL */ `
  input UserInsertInput {
    isEnabled: Boolean!
    profile: UserProfileInput!
  }

  input UserProfileInput {
    firstName: String!
    lastName: String!
  }
`;
