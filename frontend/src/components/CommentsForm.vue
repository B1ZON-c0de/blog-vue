<script lang="ts" setup>
import { useArticleStore } from '@/stores/article'
import ButtonBase from './base/ButtonBase.vue'
import { ref } from 'vue'

const articleStore = useArticleStore()

const newComment = ref<string>('')
const errorMessage = ref<string>('')

const handleCommentSubmit = async () => {
  errorMessage.value = ''
  if (newComment.value.trim() === '') {
    errorMessage.value = 'Поле не может быть пустым'
    return
  }

  const response = await articleStore.addComment(newComment.value)
  if (response.error) {
    errorMessage.value = response.error
    return
  } else {
    newComment.value = ''
  }
}
</script>

<template>
  <form
    @submit.prevent="handleCommentSubmit"
    class="mb-8 rounded-md bg-white p-4 shadow-md"
  >
    <label for="newComment" class="block text-gray-700">Ваш комментарий</label>
    <textarea
      name="newComment"
      id="newComment"
      v-model="newComment"
      class="mb-5 w-full resize-none rounded-md border border-gray-400 p-2 px-3 py-2"
    ></textarea>
    <div class="flex justify-between">
      <p class="text-red-500" v-if="errorMessage">{{ errorMessage }}</p>
      <ButtonBase type="submit" class="ml-auto w-xs">Отправить</ButtonBase>
    </div>
  </form>
</template>
