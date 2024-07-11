<template>
    <div class="userlist-container">
        <div class="userlist-title">User list</div>
            <div class="userlist-iter">
                <div v-for="user in users">
                    {{  user.username }}
                </div>
            </div>
    </div>
</template>

<script lang="ts">
    
import userService from '@/services/users/userService';
import { User } from '@/models/models';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      selectedTab: '',
      users: [] as User[]
    };
  },
  methods: {
  },

  async mounted() {
    const token = localStorage.getItem('user')
    const username = localStorage.getItem('username')
    if (token !== null) {
      const resusers = await userService.getAllUsers(username);
      console.log(resusers)
      this.users = resusers;
  }
  }
})
</script>

<style scoped>
.userlist-container{
	/* width: 30%; */
	height: 30%;
	padding: 17px;
	border: 1px solid rgb(97, 97, 97);
	border-radius: 4px;
	
}

.userlist-title {
	font-size: x-large;
  font-weight: 600;
}
</style>