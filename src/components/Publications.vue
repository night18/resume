<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-solid fa-book"/>
    <b>Publications </b>
  </p>
  <div>
    <ul>
      <li 
      v-for="(area, a_index) in research_area" 
      @click="display_area(a_index)" 
      :class="'btn_area ' + (a_index == select_index? 'btn_selected': '')"
      >
        {{area}}
      </li>
    </ul>
  </div>
  <b-row class='row' v-for="(paper, p_index) in papers">
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
    <a @click.prevent="go_home" class="more_url">Back to Home ...</a>
  </p>
</template>
<script>
import { papers } from '@/components/constants'
export default {
  data: function () {
    return {
      select_index: 0,
      icon_folder: 'paper-icons/',
      pdf_folder: 'papers/',
      papers: papers
    }
  },
  computed: {
    research_area: function () {
      let areas = ['All'];
      for (let i = 0; i < papers.length; i++) {
        let paper = papers[i];
        if (typeof paper.areas !== 'undefined') {
          for (let j = 0; j < paper.areas.length; j++) {
            let area = paper.areas[j];
            if (!areas.includes(area)) {
              areas.push(area);
            }
          }
        }
      }
      return areas;
    }
  },
  methods: {
    go_home: function () {
      this.$router.push('/');
    },
    display_area: function (index) {
      this.select_index = index;
      if (index === 0) {
        this.papers = papers;
      } else {
        let area = this.research_area[index];
        this.papers = papers.filter(x => x.areas.includes(area));
      }
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