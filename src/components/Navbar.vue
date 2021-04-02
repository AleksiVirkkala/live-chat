<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">Currently logged in as... email</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useLogout from '@/composables/useLogout'

export default defineComponent({
  name: 'Navbar',
  setup() {
    const { error, logout } = useLogout()

    const handleClick = async () => {
      await logout()

      if (!error.value) {
        console.log('User logged out')
      }
    }

    return { logout, handleClick }
  },
})
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>
