<template>
  <b-navbar id="navbar" toggleable="lg">
    <b-navbar-brand @click="go_home">
      <img src="/favicon.svg" style="width: 30px;">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="align-right">
        <b-nav-item @click="go_home">Home</b-nav-item>
        <b-nav-item @click="go_publications">Publications</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <header>
    <Sidebar/>
  </header>
  <main>
    <router-view/>
  </main>
</template>
<script setup>
import Sidebar from "./components/Sidebar.vue";
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Experience from "./components/Experience.vue";
import ShortPublication from "./components/ShortPublication.vue";
</script>
<script>
export default {
  methods: {
    go_home: function () {
      this.$router.push('/');
    },
    go_publications: function () {
      this.$router.push('/Publications');
    },
  }
}
</script>
<style scoped>
  header {
    background: var(--color-background);
    line-height: 1.5;
    padding-top: 60px;
    text-align: center;
  }

  main {
    width: 100%;
    position: relative;
    overflow: auto;
    box-shadow: none;
    padding: 20px;
  }

  #navbar {
    color: #000000;
    border-bottom: 1px solid #DBDBDB;
    z-index: 999;
    text-transform: uppercase;
    font-size: 0.8em;
    letter-spacing: 1px;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
  }

  .align-right {
    margin-left: auto;
  }

  @media (min-width: 1024px) {
    header {
      width: 25%;
      text-align: center;
      overflow: hidden;
      position: fixed;
      left: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0px auto;
    }

    main {
      margin-top: 57px;
      width: 75%;
      height: 100vh;
      position: fixed;
      right: 0;
      height: 100vh;
      overflow: auto;
      border-left: 1px solid #DBDBDB;
      padding: 20px 8% 60px 8%;
    }
  }
</style>
