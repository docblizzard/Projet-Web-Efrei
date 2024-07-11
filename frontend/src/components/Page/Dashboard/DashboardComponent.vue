<template>
  <div class="home">
    <div class="left-container">
    <!-- <ConversationComponent></ConversationComponent> -->
      <component :is="currentComponent" :conversationId="conversationId"></component>
  </div>
      <div class="right-container">
        <UsersListComponent></UsersListComponent>
      </div>
  </div>

</template>

<script lang="ts">
import UsersListComponent from '@/components/UsersListComponent.vue';
import { defineComponent } from 'vue';
import { Conversation } from '@/models/models';
import ConversationComponent from '@/components/ConversationComponent.vue';
import MessagesComponent from '@/components/MessagesComponent.vue';

export default defineComponent({
  components: {
    ConversationComponent,
    MessagesComponent,
    UsersListComponent
  },
  data() {  
    return {
      post: [] as Conversation[],
      conversationId: this.$route.params.conversationId || null
    }
  },
  methods: {
  },
  computed:{
    currentComponent() {
      return this.$route.name === 'messages' ? 'MessagesComponent' : 'ConversationComponent';
    }
  },
  watch: {
    '$route.params.conversationId'(newId) {
      this.conversationId = newId;
    }
  }

});

</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  min-height: 88vh;
}

.left-container {
  width: 40%;
}
.right-container {
}
</style>