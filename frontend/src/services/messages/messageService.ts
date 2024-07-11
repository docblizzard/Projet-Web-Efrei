import { gql } from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class messageService {

    async getMessageFromConv(postId: string) {
        const getMessageFromConv = gql`
            query GetMessageFromConv($postId: String!) {
              getMessageFromConv(data: $postId) {
                code
                response
                messages {
                  id
                  message
                  userId
                  receiverId
                  createdAt
                }
              }
            }`;
        try {
            const { data } = await apolloClient.query({ query: getMessageFromConv,
                variables: {postId}
             });
            return data.getMessageFromConv
        }
        catch (error) {
            console.error('Error fetching comments:', error);
            throw error;
        }
    }

    async createComment({comment, postId}: {comment:String, postId: String}) {
        const createComment = gql`
            mutation CreateComment($comment: String!, $postId: String!) {
              createComment(comment: $comment, postId: $postId) {
                code
                message
                comment {
                  id
                  comment
                  createdAt
                  postId
                  userId
                }
              }
            }`;
        try {
            const { data } = await apolloClient.mutate({mutation: createComment,
                variables: { comment, postId }
            });
            return data.createComment
        }
        catch (error) {
            console.error('Error creating post:', error)
            throw error
          }
    }
}

export default new messageService();