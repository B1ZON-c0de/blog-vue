<script lang="ts" setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()
</script>

<template>
  <div
    v-show="modalStore.isVisible"
    class="fixed top-0 right-0 bottom-0 left-0 z-99"
  >
    <div
      @click="modalStore.closeModal"
      class="fixed top-0 right-0 bottom-0 left-0 bg-black/50"
    ></div>
    <div class="relative top-50 mx-auto w-md rounded-md bg-white p-8 shadow-md">
      <p class="mt-4 mb-8 text-center font-semibold">
        {{ modalStore.message }}
      </p>
      <div class="flex justify-end gap-4">
        <button @click="modalStore.confirmModal()" class="btn-modal">Да</button>
        <button
          @click="modalStore.closeModal"
          class="btn-modal bg-gray-300 text-black hover:bg-gray-400"
        >
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>
