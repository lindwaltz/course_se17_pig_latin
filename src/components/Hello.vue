<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>The Joyous Pig Latin Generator</h2>
    <div class="textinput">
      <p>Input:</p>
      <textarea rows="4" cols="80">Write your message here</textarea>
    </div>
    <button>Piggify!</button>
    <div class="textoutput">
      <p><i>Output will appear here<i></p>
    </div>
    <hr />
    <p>This is a demonstration project of a CI-pipeline <br /> made as part of the WASP software engineering course</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Porky'
    }
  }
}
</script>

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
