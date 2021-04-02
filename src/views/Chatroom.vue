<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import getUser from '@/composables/getUser'

export default defineComponent({
  name: 'Chatroom',
  components: { Navbar },

  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, newVal => {
      if (newVal === null) {
        router.push({ name: 'Welcome' })
      }
    })
  },
})
</script>


<style>

</style>
