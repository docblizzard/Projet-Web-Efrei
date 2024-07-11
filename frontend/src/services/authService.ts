import store from '@/store/vuex';
import gql from 'graphql-tag';
import { apolloClient } from '@/services/apolloClient';

class authService {

    async loginUser({username, password}: {username: string, password: string}) {
      const signIn = gql`
        mutation SignIn($username: String!, $password: String!) {
          signIn(data: { username: $username, password: $password }) {
            response
            code
            token{
              token
            }
          }
        }`;
        
      try {
        const { data } = await apolloClient.mutate({ mutation: signIn,
            variables: { username, password }
         });
        return data.signIn; 
      }
      catch (error) {
        console.error('Error creating user:', error);
        throw error;
      }
  }
    async logout() {
        try {
          localStorage.removeItem('user');
          store.dispatch('logout');
        } catch (error) {
          console.error('Logout error:', error);
          throw error; 
        }
      }
}

export default new authService();