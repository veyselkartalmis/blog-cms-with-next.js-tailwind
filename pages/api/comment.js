import { GraphQLClient, gql } from "graphql";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function comments(req, res) {
  const { name, email, slug, comment } = req.body;
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorizaton: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  });

  const query = gql`
    mutation createComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) {id}
    }
  `

  const result = await graphQLClient.request(query, req.body);
  return res.status(200).send(result);
}
