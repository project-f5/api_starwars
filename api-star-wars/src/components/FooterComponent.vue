<script setup>

</script>

<template>
<div>
  <img src="../components/icons/footer.png" alt="">
  <div class="icons">
    <a href="https://es-es.facebook.com/starwars.es/" target="_blank"><i class="fa-brands fa-facebook fa-lg"></i></a>
    <a href="https://www.youtube.com/watch?v=hvl9M-md_fE" target="_blank"><i class="fa-brands fa-youtube fa-lg"></i></a>
  </div>
</div>
</template>

<style scoped>
div{
  height: 100px;
  background-color: #1D1D1D;
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100px;
  height: 90px;
}
.icons{
  width: 5%;
  margin-left: -88px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
}
i{
  color: #E4A951;
}
i:hover{
  cursor: pointer;
}
@media (max-width: 410px) {
  div{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
  width: 80px;
  height: 70px;
  }
  .icons{
  width: 16%;
  margin-left: -70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
}
}
</style>
