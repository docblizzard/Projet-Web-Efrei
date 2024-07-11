<template>
    <div class="convs-container">
        <div class="user-conv" v-for="(conv, index) in conversations" :key="conv.id">
            <div class="click-message" @click="openMessages(conv.id)" >{{  usernames[index] || 'Loading...' }}</div>
						<!-- <MessagesComponent :conversationId=conv.id></MessagesComponent> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Conversation } from '@/models/models';
import conversationsService from '@/services/conversations/conversationsService';
import userService from '@/services/users/userService';
import { defineComponent } from 'vue';
import MessagesComponent from './MessagesComponent.vue';

export default defineComponent({
	components: {
		MessagesComponent
	},
    data() {
    return {
      conversations: [] as Conversation[],
      usernames: [] as String[]
    };
  },
  methods: {
    async getUserfromConvs(){
        for (let i = 0; i < this.conversations.length; i++) {
        const userId = this.conversations[i].user2Id;
        console.log('turn' + userId)
        try {
          const res = await userService.getUserbyId(userId);
          console.log(res)
          this.usernames[i] = res.username;
          console.log(this.usernames[i])
        } catch (e) {
          console.log(e);
        }
      }
    },

    async getConversations(token: string){
        const res = await userService.getUserbyToken(token);
        return await conversationsService.getConversationsUser(res.id);
    },

		openMessages(conversationId: string) {
			console.log(conversationId)
      this.$router.push({ name: 'messages', params: { conversationId} });
    }
	},

    async mounted() {
        const token = localStorage.getItem('user');
        const username = localStorage.getItem('username');
        if (token !== null) {
            // const res = await userService.getUserbyToken(token);
            this.conversations = await this.getConversations(token);
            console.log(this.conversations);
            this.getUserfromConvs();
            console.log(this.usernames)
        }
    }
})
</script>

<style scoped>

.convs-container{
    font-size: large;
  font-weight: 600;
}

.user-conv{
	border: 1px solid rgb(97, 97, 97);
	border-radius: 8px;
	margin: 10px;
	padding: 20px;
}

.click-message:hover{
	cursor: pointer;
}
</style>