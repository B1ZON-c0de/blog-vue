<script setup lang="ts">
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<template>
  <div
    class="flex min-h-screen w-full flex-col bg-gray-100"
  >
    <header
      class="fixed top-0 right-0 left-0 z-99 bg-white shadow-md"
    >
      <LayoutHeader />
    </header>
    <main class="mt-26 flex-1"><RouterView /></main>
    <footer class="bg-white">
      <LayoutFooter />
    </footer>
  </div>
</template>

<style scoped></style>
