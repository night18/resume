<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-solid fa-newspaper"/>
    <b> News </b>
  </p>
  <b-row v-for="(page, n_index) in news" class='row'>
    <b-col cols=2 style="margin: 0 auto;">
      {{page.date}}
    </b-col>
    <b-col cols=10 style="margin: auto;">
      {{page.title}}
    </b-col>
  </b-row>
</template>
<script>
import { news } from '@/components/constants'
export default {
  data: function () {
    return {
    }
  },
  computed: {
    news: function () {
      return news;
    }
  }
}
</script>
<style scoped>
</style>