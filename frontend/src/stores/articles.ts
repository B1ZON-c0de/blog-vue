import type { Article } from '@/types/articleTypes'
import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useArticlesStore = defineStore(
  'articles',
  () => {
    const articles = ref<Article[]>([])
    const error = ref<string | null>(null)
    const isLoading = ref<boolean>(false)

    const fetchArticles = async () => {
      isLoading.value = true
      try {
        const response = await fetch('/posts')
        if (!response.ok) {
          throw new Error('Не удалось загрузить статьи')
        }
        const { data } = await response.json()
        articles.value = data.posts
      } catch (e) {
        isLoading.value = false
        if (e instanceof Error) {
          error.value = e?.message
          console.log(e?.message)
        }
      } finally {
        isLoading.value = false
      }
    }
    return { articles, fetchArticles, error, isLoading }
  },
)

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useArticlesStore, import.meta.hot),
  )
}
