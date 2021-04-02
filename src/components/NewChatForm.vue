<template>
  <form>
    <textarea
      v-model="message"
      placeholder="Type a message and hit enter to send..."
      @keypress.enter.prevent="handleSubmit"
    />
  </form>
</template>

<script lang="ts">
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NewChatForm',
  setup() {
    const message = ref('')
    const { user } = getUser()

    const handleSubmit = async () => {
      const chat = {
        name: user.value?.displayName,
        message: message.value,
        createdAt: timestamp()
      }
      console.log(chat)
      message.value = ''
    }


    return { message, handleSubmit }
  },
})
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>
