import gql from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class userService {

    async getUserbyToken(token: string){
        const fetchUser = gql`
          query GetUserByToken($token: String!) {
            getUserbyToken(token: {token: $token}) {
              username
              id
            }
          }
        `;
        try {
            const { data } = await apolloClient.query({ query: fetchUser,
              variables: { token }
             });
            return data.getUserbyToken; 
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getUserbyId(userId: string){
        const fetchUser = gql`
          query getUserById($userId: String!) {
            getUserById(id: $userId) {
              id
              username
            }
          }`;
        try {
            const { data } = await apolloClient.query({ query: fetchUser,
              variables: { userId }
             });
            return data.getUserById; 
        }
        catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async getAllUsers(username: string){
      const getUsers = gql`
          query GetAllUsers($username: String!) {
            getAllUsers(username: $username) {
              id
              username
            }
          }`;
      try {
        const { data } = await apolloClient.query({ query: getUsers,
          variables: {username}
         });
        return data.getAllUsers; 
    }
    catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
    }
    
    async createUser({username, password}: {username: string, password: string}){
        const createUser = gql`
            mutation CreateUser($username: String!, $password: String!) {
              createUser(data: { username: $username, password: $password }) {
                id
                username
              }
            }`;

        try {
            const { data } = await apolloClient.mutate({ mutation: createUser,
                variables: { username, password }
             });
            return data.createUser; 
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw error;
          }
    }
}

export default new userService();