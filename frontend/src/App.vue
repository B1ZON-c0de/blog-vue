<script setup lang="ts">
import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'
import ModalBase from './components/base/ModaBase.vue'
</script>

<template>
  <div class="flex min-h-screen w-full flex-col bg-gray-100">
    <header class="fixed top-0 right-0 left-0 z-10 bg-white shadow-md">
      <LayoutHeader />
    </header>
    <main class="mt-26 flex-1"><RouterView /></main>
    <footer class="bg-white">
      <LayoutFooter />
    </footer>
    <ModalBase />
  </div>
</template>

<style scoped></style>
