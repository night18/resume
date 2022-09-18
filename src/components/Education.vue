<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-solid fa-briefcase"/>
    <b> Education </b>
  </p>
  <b-row v-for="degree in degrees" class='row'>
    <b-col cols=2 style="text-align: center; margin: auto;">
      <img :src="degree.src">
    </b-col>
    <b-col cols=10 style="margin: auto;">
      <strong>{{degree.name}}</strong>,<span class="location">{{degree.location}}</span>
      <p class="degree">{{degree.level}} in {{degree.major}}</p>
      <p class="time">{{degree.start_year}} - {{degree.end_year}}</p>
    </b-col>
  </b-row>
  
</template>
<script>
import { degrees } from '@/components/constants'
export default {
  data: function () {
    return {
    }
  },
  computed: {
    degrees: function () {
      return degrees;
    }
  }
}
</script>
<style scoped>
  .row {
    padding-bottom: 10px !important;
    min-height: 120px;
  }

  p {
    margin-bottom: 0;
  }

  img {
    width: 100px;
    max-width: 100%;
    margin: auto;
    vertical-align: middle;
  }

  .location{
    font-style: italic; 
    font-size: 0.8em;
    padding-bottom: 0.3em;
  }

  .time{
    font-size: 0.8em;
  }

  .degree{
    color: #333333;
  }


</style>