<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import getCollection from '@/composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

export default defineComponent({
  name: 'ChatWindow',
  setup() {
    const { error, documents } = getCollection('messages')

    const formattedDocuments = computed(() => documents.value ? documents.value.map(doc => ({
      ...doc, createdAt: formatDistanceToNow(doc.createdAt.toDate())
    })) : null)

    return { error, documents, formattedDocuments }
  },
})
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>
