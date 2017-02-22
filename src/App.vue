<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>The Joyous Pig Latin Generator</h2>
      <div class="textinput">
        <p>Input:</p>
        <textarea v-model='piginput' rows="4" cols="80" />
      </div>
      <button v-on:click="piggify()">Piggify!</button>
      <div class="textoutput">
        <p><i>{{ pigoutput }}<i></p>
      </div>
      <hr />
      <p>This is a demonstration project of a CI-pipeline. <br /> made as part of the WASP software engineering course</p>
    </div>
  </div>
</template>

<script>
import pigspeak from './lib/pigspeak'

export default {
  name: 'app',

  data () {
    return {
      msg: 'Porky',
      piginput: 'Write your message',
      pigoutput: 'Output will appear here'
    }
  },

  methods: {
    piggify() {
      this.pigoutput = pigspeak.piggify(this.piginput)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
