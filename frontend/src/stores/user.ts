import type { User } from '@/types/userTypes'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    login: '',
    role: null,
  })
  const register = async (login: string, password: string) => {
    try {
      const resp = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      })
      if (!resp.ok) {
        throw new Error('Ошибка регистрации')
      }
      const data = await resp.json()
      return data
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      }
    }
  }
  return {
    user,
    register,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
