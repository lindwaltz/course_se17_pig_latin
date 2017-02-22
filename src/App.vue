<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>The Joyous Pig Latin Generator</h2>
      <div class="pigconvert">
        <div class="textinput">
          <textarea v-model='piginput' rows="10" cols="60" />
        </div>
        <!-- <button v-on:click="piggify()">Piggify!</button> -->
        <div class="textoutput">
          <p><i>{{ pigoutput }}</i></p>
        </div>
      </div>
      <div class="settings">
        <input type="radio" id="piglatin" value="piglatin" v-model="picked">
        <label for="piglatin">Pig Latin</label>
        <br>
        <input type="radio" id="rovarspraket" value="rovarspraket" v-model="picked">
        <label for="rovarspraket">Rövarspråket</label>
        <br>
      </div>
      <hr />
      <p>This is a demonstration project of a CI-pipeline. <br /> made as part of the WASP software engineering course</p>
    </div>
  </div>
</template>

<script>
import pigspeak from './lib/pigspeak'

const comp = {
  name: 'app',

  data () {
    return {
      msg: 'Porky',
      picked: 'piglatin',
      piginput: 'Write your message',
      pigoutput: 'Output will appear here'
    }
  },

  methods: {
    piggify() {
      let newmsg = ''
      if (this.picked === 'piglatin') {
        newmsg = pigspeak.piggify(this.piginput)
      } else if (this.picked === 'rovarspraket') {
        newmsg = pigspeak.rovarify(this.piginput)
      }
      this.pigoutput = newmsg
    }
  },

  watch: {
    'piginput': function (val, old) {
      this.piggify()
    },
    'picked': function (val, old) {
      this.piggify()
    }
  }
}

export default comp
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

.pigconvert {
  display: -webkit-inline-flex;
  display: inline-flex;
  max-width: 800px;
}

button {
  max-height: 50px;
  margin: 10px;
}

.textinput {
  margin: 10px;
}

.textoutput {
  min-width: 200px;
  max-width: 400px;
}
</style>
