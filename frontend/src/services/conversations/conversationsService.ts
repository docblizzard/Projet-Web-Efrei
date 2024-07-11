import gql from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class conversationService {

    async getConversationsUser(userId: string){
        const getConvs = gql`
        query GetConversationsUser {
          getConversationsUser(data: "b27c11fd-88dd-4834-aa97-45440231ee01") {
            code
            response
            conversation {
              id
              user1Id
              user2Id
              messages {
                message
              }
            }
          }   
        }`;
        try {
            const { data } = await apolloClient.query({ query: getConvs });
            return data.getConversationsUser.conversation
        }
        catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    async createConversation({senderUsername, receiverUsername}: {senderUsername:String,receiverUsername:String}){
        

        const createConversation = gql`
            mutation CreateConversation($senderUsername: String!, $receiverUsername: String!) {
              createConversation(data :{senderUsername: $senderUsername, receiverUsername: $receiverUsername}) {
              conversation {
                id
              }
              response
              code
            }
        }`;
        try {
            const { data } = await apolloClient.mutate({mutation: createConversation,
                variables: { senderUsername: senderUsername, receiverUsername: receiverUsername }
            });
            return data.createConversation
        }
        catch (error) {
            console.error('Error creating post:', error)
            throw error
          }
    }
}

export default new conversationService();