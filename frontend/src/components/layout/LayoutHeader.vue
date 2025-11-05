<script lang="ts" setup>
import LayoutContainer from '@/components/layout/LayoutContainer.vue'
import {
  faCode,
  faBackward,
  faFile,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { RouterLink } from 'vue-router'
</script>

<template>
  <LayoutContainer>
    <div class="flex items-center justify-between py-4">
      <div>
        <RouterLink
          to="/"
          class="group transition-colors duration-300 hover:text-blue-500"
        >
          <FontAwesomeIcon
            :icon="faCode"
            class="mr-2 transition-all duration-300 group-hover:scale-115"
          />
          Блог веб-разработчика
        </RouterLink>
      </div>
      <div>
        <p>Веб-технологии</p>
        <p>Написание кода</p>
        <p>Разбор ошибок</p>
      </div>
      <div>
        <p class="mb-2">
          <RouterLink to="/login" class="btn-login" aria-label="Войти"
            >Войти</RouterLink
          >
        </p>
        <p>
          <a href="#" @click.prevent="$router.go(-1)">
            <FontAwesomeIcon :icon="faBackward" class="icon-hover" />
          </a>
          &nbsp;
          <RouterLink to="/posts" aria-label="Написать статью">
            <FontAwesomeIcon :icon="faFile" class="icon-hover" />
          </RouterLink>
          &nbsp;
          <RouterLink to="/users" aria-label="Пользователи">
            <FontAwesomeIcon :icon="faUsers" class="icon-hover" />
          </RouterLink>
        </p>
      </div>
    </div>
  </LayoutContainer>
</template>
