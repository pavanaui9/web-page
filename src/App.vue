<template>
  <div id="app">
    <Header />
    
  </div>
</template>

<script>
import Header from './components/layout/Header';
export default {
  name:"app",
  components: {
    Header
  }
}
</script>

<style>
 body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #d7d2cc 0%, #304352 100%);
  }

  #app {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background: black;
    border-radius: 40px;
    border:1px solid black;
    color: #fff;
    text-align: center;
    padding: 10px;
    margin: 4.8rem;
  }

  .btn {
    display: inline-block;
    border-radius: 25px;
    background: #000000;
    color: #fff;
    padding: 10px 40px;
    cursor: pointer;
    border: 1px solid;
    margin: 20px 0px;
    font-size: 11px;
  }
.content{
  padding: 50px 150px 90px 81px;
}
.content p{
  font-size : 14px;
}
.content h1{
  font-size : 38px;
}
  .btn:hover {
    background: #666;
  }
</style>
