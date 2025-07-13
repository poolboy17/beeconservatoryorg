import { gql } from '@apollo/client';
import client from '../utils/apollo-client';

export async function fetchWordPressPosts() {
  const { data } = await client.query({
    query: gql`
      query GetPosts {
        posts(first: 10) {
          nodes {
            id
            title
            excerpt
            date
            slug
          }
        }
      }
    `,
  });
  return data.posts.nodes;
}
