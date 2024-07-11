<template>
    <div v-if="conversationId" class="conv-message-container">
        <div v-for="message in messages" :key="message.id">
            <div class="comment-content-sent" v-if="currentUserId == message.userId">
                <div class="comment">
                    {{ message.message }}
                </div>
                <div class="datepost">
                    {{ formatDate(message.createdAt) }}
                </div>
            </div>
						<div class="comment-content-received" v-else >
							<div class="comment">
                    {{ message.message }}
                </div>
                <div class="datepost">
                    {{ formatDate(message.createdAt) }}
                </div>
						</div>
        </div>
				<NewCommentComponent :conversationId="conversationId"></NewCommentComponent>
    </div>
</template>

<script lang="ts">
import { Message, User } from '@/models/models';
import { defineComponent, ref, watch } from 'vue';
import dateUtilities from '@/utilities/dateUtility';
import messageService from '@/services/messages/messageService';
import userService from '@/services/users/userService';
import NewCommentComponent from './NewCommentComponent.vue';
export default defineComponent({
	components: {
		NewCommentComponent
	},
	props: {
    conversationId: {
        type: String,
        required: true
    }
  },
	data(){
		return {
			messages: [] as Message[],
			currentUserId : ''
		}
	},
	methods: {
		async getMessageFromConv(conversationId: string){
			const res = await messageService.getMessageFromConv(conversationId);
			this.messages = res.messages;
			console.log(this.messages[0].message)
		},

		formatDate(date: Date){
            return dateUtilities.formatDate(date)
    },
		
		async returnLoggedUser(){
			const token = localStorage.getItem('user');
			if (token !== null) {
				const res = await userService.getUserbyToken(token);
				console.log(res)
				this.currentUserId = res.id
			}
		}
	},

	async mounted() {
		console.log(this.conversationId)
		this.returnLoggedUser();
		this.getMessageFromConv(this.conversationId);
	},

})

</script>

<style scoped>

.conv-message-container{
	border: 2px solid rgba(24, 17, 17, 0.055);
	border-radius: 6px 6px 0px 6px;
	padding: 20px;
}
.comment-content-sent{
	margin-bottom: 20px;
	position: relative;
	left: 4px;
  border: 1px solid rgba(245, 245, 245, 0.377);
  border-radius: 6px 6px 0px 6px;
  background-color: rgba(141, 214, 5, 0.438);
  margin-top: 10px;
  padding: 5px;
}

.comment-content-received{
	margin-bottom: 5px;
	position: relative;
	right: 4px;
	border: 1px solid rgba(245, 245, 245, 0.377);
  border-radius: 0px 6px 6px 6px;
  background-color: rgba(185, 185, 185, 0.438);    
  margin-top: 10px;
  padding: 5px;
}

.datepost{
  text-align: right;
  font-size: small;
}

</style>