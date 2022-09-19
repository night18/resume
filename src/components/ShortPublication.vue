<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-solid fa-book"/>
    <b> Selected Publications </b>
  </p>
  <b-row class='row' v-for="(paper, p_index) in selected_paper">
    <b-col cols=2 style="text-align: center; margin: auto;">
      <img :src="icon_folder + paper.src">
    </b-col>
    <b-col cols=10 style="margin: auto;">
      <a :href="pdf_folder + paper.href" target="_blank">{{paper.title}}</a>
      <br>
      <span v-for="(author, a_index) in paper.authors">
        <b v-if="author==='Chun-Wei Chiang'"> {{author}} </b>
        <span v-else>{{author}}</span>

        <span v-if="paper.authors.length == 1"></span>
        <span v-else-if="(a_index===0) && (paper.authors.length == 2)"> and </span>
        <span v-else-if="a_index!==paper.authors.length-1">, 
          <span v-if="a_index===paper.authors.length-2">
            and
          </span>
        </span>
      </span>
      <br>
      {{paper.abbreviation}}: {{paper.full_publisher}} <br>
      <b v-if="typeof paper.note !== 'undefined'"> {{paper.note}} <br></b>
      <p v-if="typeof paper.supplementary !== 'undefined'" v-for="supp in paper.supplementary">
        <a :href="pdf_folder + supp.href" target="_blank">[{{supp.key}}]</a>
      </p>
    </b-col>
  </b-row>
  <p>
    <a @click="go_publications" class="more_url">More publications ...</a>
  </p>
</template>
<script>
import { papers } from '@/components/constants'
export default {
  data: function () {
    return {
      icon_folder: 'paper-icons/',
      pdf_folder: 'papers/'
    }
  },
  methods: {
    go_publications: function () {
      this.$router.push('/Publications');
    }
  },
  computed: {
    selected_paper: function () {
      return papers.slice(0, 3);
    }
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

</style>