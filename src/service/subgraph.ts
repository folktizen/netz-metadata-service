import { gql } from 'graphql-request';

const ETH_NAMEHASH =
  '0xa1292c7c8e71946fec3eb68937f1e2b9aba3b285d171870aa0d93804b496424e';

export const GET_DOMAINS = gql`
  query getDomains($tokenId: String) {
    domain(id: $tokenId) {
      id
      labelhash
      name
      createdAt
      parent {
        id
      }
      resolver {
        texts
        address
      }
    }
  }
`;

export const GET_DOMAINS_BY_LABELHASH = gql`
  query getDomains($tokenId: String) {
    domains(
      where: {
        parent: "${ETH_NAMEHASH}",
        labelhash: $tokenId
      }
    ) {
      id
      labelhash
      name
      createdAt
      parent {
        id
      }
      resolver {
        texts
        address
      }
    }
  }
`;

export const GET_REGISTRATIONS = gql`
  query getRegistration($tokenId: String) {
    registrations(
      orderBy: registrationDate
      orderDirection: desc
      where: { id: $tokenId }
    ) {
      labelName
      registrationDate
      expiryDate
    }
  }
`;

export const GET_WRAPPED_DOMAIN = gql`
  query getWrappedDomain($tokenId: String) {
    wrappedDomain(id: $tokenId) {
      id
      owner {
        id
      }
      fuses
      expiryDate
      domain {
        name
      }
    }
  }
`;
