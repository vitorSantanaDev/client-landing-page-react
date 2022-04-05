import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  `https://api-landing-page-strapi.herokuapp.com/graphql`
)
export default client
