import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPosts {
      id
      title
      slug
      content
      imageUrl
      author {
        username
      }
      category {
        name
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    post(slug: $slug) {
      id
      title
      slug
      content
      imageUrl
      author {
        username
      }
    }
  }
`;
