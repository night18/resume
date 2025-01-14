<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-regular fa-folder-open"/>
    <b> Projects </b>
  </p>
  
  <p>
    <a @click.prevent="go_home" class="more_url">Back to Home ...</a>
  </p>
</template>
<script>
import { projects } from '@/components/constants'
export default {
  data: function () {
    return {
      
    }
  },
  computed: {
    
  },
  methods: {
    go_home: function () {
      this.$router.push('/');
    },
  }
}
</script>
<style scoped>
  .row {
    padding-bottom: 20px !important;
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

  .card
  {
      background: #FFFFFF;
      text-align: center;
      vertical-align: middle;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      width: 100%;
      max-width: 900px;
      min-height: 150px;
      margin: 15px auto;
      padding: 10px 20px;
      font-size: 1em;
  }

  .card-info {
    text-align: left;
    font-size: 1em;
    margin: 15px 0;
  }

  .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card .publication{
    text-align: left;
    font-size: 1em;
    margin: 15px 0;
  }

  .card .box-urls{
    text-align: right;
    font-size: 16px;
    padding-right: 20px;
  }

  .more_url {
    cursor: pointer;
  }

  .btn_area {
    display: inline-block;
    padding: 5px 10px;
    margin: 5px 5px;
    border: solid 2px #02ae93;
    cursor: pointer;
  }

  .btn_selected {
    border-color: #f4a261;
  }

</style>