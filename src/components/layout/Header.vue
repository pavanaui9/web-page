<template>
  <header class="header">
    <div id="nav">
     
      <div class="left-section">
        <router-link to="/"><span class="search"><img src="../../assets/search.svg"> </span>Home</router-link>
        <router-link to="/explore">Explore</router-link> 
        <router-link to="/stories">Stories</router-link>
        <router-view/>
      </div> 
      <div class="right-section"> 
         <div class="row">
          <div id="explore">
             <router-link active-class="active" to="/explore">
                <div class="link">Explore 
                  <div class="sub-header">Explore the best places deals</div>
                </div>
              </router-link>
          </div>  
          <div id="about" >
            <router-link active-class="active"  to="/about"><div class="link">About <div class="sub-header">Our company history</div></div></router-link>
          </div>
        </div>
       <div class="row">
          <div id="stories">
            <router-link active-class="active"  to="/stories">
            <div class="link">Stories 
              <div class="sub-header">Our customer and company stories</div>
            </div></router-link>
          </div>
          <div id="help">
            <router-link active-class="active"  to="/help"><div class="link">Help <div class="sub-header">FAQ and Support</div></div></router-link>
        </div>
       </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  .title{
    margin-bottom: 20px;
  }
 
#nav{
    display: flex;
    padding: 1rem;
    text-align: left;
}
.search{
  display:inline-block;
  padding:10px;
}

  .header a {
    padding:15px;
    text-decoration: none;
  }

.left-section {
   margin-right: auto;
   font-size: 14px; 
}
.right-section{
    margin-left: auto;
    display:flex;
    border-radius : 5px;
    color:black;
}

.right-section .link{
    width: 205px;
    padding: 150px 20px 20px 20px;
    font-size: 26px; 
}
.sub-header {
  font-size: 12px;
  padding-top: 25px;
}
#explore{
    background:#3540fa;
    border-top-left-radius: 25px;
    color:#a4a9fa !important;
}
#explore a{
    color:#a4a9fa;
}
.active .link{
     color:black;
     font-weight: bold;
}
#stories{
    background:#ff7927;
    border-top-right-radius: 25px;
    color:#fbfaff;
}
#stories a{
    color:#fbfaff;
}
#about{
    background:#e5e1fc;
    border-bottom-left-radius: 25px;
    color:#a3a4e1;
}
#about a{
    color:#a3a4e1;
}
#help{
    background:#7b80db;
    border-bottom-right-radius: 25px;
    color:#f5feff;
}
#help a{
    color:#f5feff;
}

.header a {
  color:white;
}
</style>


