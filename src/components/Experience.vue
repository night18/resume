<template>
  <p class="section-title">
    <font-awesome-icon icon="fa-solid fa-graduation-cap"/>
    <b> Experience </b>
  </p>
  <b-row v-for="(job, j_index) in jobs" class='row'>
    <b-col cols=2 style="text-align: center; margin: auto;">
      <img :src="job.src">
    </b-col>
    <b-col cols=10 style="margin: auto;">
      <strong>{{job.name}}</strong>,<span class="location">{{job.location}}</span>
      <div v-for="(position, p_index) in job.positions">
        <b-button v-b-toggle="'job_' + j_index + '_' + p_index"  variant="light">
          <p class="title"> {{position.title}} </p>
          <p class="time">{{position.start_year}} - {{position.end_year}}</p>
        </b-button>
        <b-collapse :id="'job_' + j_index + '_' + p_index">
          <b-card class="collapse_card">
            <ul>
              <li v-for="(desc, d_index) in position.duty">
                {{desc}}
              </li>
            </ul>
          </b-card>
        </b-collapse>
      </div>
    </b-col>
  </b-row>
  
</template>
<script>
import { jobs } from '@/components/constants'
export default {
  data: function () {
    return {
    }
  },
  computed: {
    jobs: function () {
      return jobs;
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

  button {
    text-align: left;
    color: var(--color-text);
    background: var(--color-background);
    padding: 0;
    line-height: 1.6;
    font-size: 18px;
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

  .title{
    color: #333333;
  }

  .collapse_card {
    font-size: 16px;
  }

</style>