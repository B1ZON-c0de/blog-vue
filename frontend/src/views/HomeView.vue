<script setup lang="ts">
import LayoutContainer from '@/components/LayoutContainer.vue'
import SearchBase from '../components/SearchBase.vue'
import ArticleList from '../components/ArticleList.vue'
import { useArticlesStore } from '@/stores/articles'

const articlesStore = useArticlesStore()
</script>
<template>
  <LayoutContainer>
    <SearchBase :on-search="articlesStore.fetchArticles" />
    <ArticleList />
  </LayoutContainer>
</template>
