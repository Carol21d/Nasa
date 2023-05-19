<script setup></script>
<template>
   <div class="cards-list">
      <div class="card 1">
         <div class="card_image">
            <img src="../../assets/Planets/saturn.jpg" />
         </div>
         <div class="card_title title-white">
            <p>Saturn</p>
         </div>
      </div>


      <div class="card 2">
         <div class="card_image"></div>
         <div class="card_title title-white">
          <ul>
        <li>Saturn is a gas giant like Jupiter. It is made mostly of hydrogen and helium</li>
        <li>Saturn has a thick atmosphere.</li>
        <li>Saturn has a lovely set of seven main rings with spaces between them.</li>
         </ul>
         </div>
      </div>
           

    


      <div class="card 4">
        
         <div class="card_title title-white">
            <p class="structure">Saturn isn’t the only planet to have rings, but it definitely has the most beautiful ones. The rings we see are made of groups of tiny ringlets that surround Saturn. They’re made of chunks of ice and rock. Like Jupiter, Saturn is mostly a ball of hydrogen and helium</p>
         </div>
      </div>


   </div>
</template>
<style lang="scss" scoped>
.cards-list {
   z-index: 0;
   width: 100%;
   display: flex;
   justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
}

.card {
   margin: 30px auto;
   width: 300px;
   height: 450px;
   border-radius: 40px;
   box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25), -5px -5px 30px 7px rgba(0, 0, 0, 0.22);
   cursor: pointer;
   transition: 0.4s;

   .card_image {
      width: inherit;
      height: inherit;
      border-radius: 40px;


      img {
         width: inherit;
         height: inherit;
         border-radius: 40px;
         object-fit: cover;
      }
   }

   .card_title {
      text-align: center;
      border-radius: 0px 0px 40px 40px;
      font-family: sans-serif;
      font-weight: bold;
      font-size: 30px;
      margin-top: -80px;
      height: 40px;
   }


   &:hover {
      transform: scale(0.9, 0.9);
      box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
         -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
   }
}

.title-white {
   color: white;

   .texto{
      display: flex;
      position: relative;
      color:black;
      text-align: justify;
      font-size: 26px;
   }
}
li{
   color: black;
   text-align: justify;
   font-size: 14px;
   position: relative;
   bottom: 24em;
   right: 1rem;
}

.structure{
   color: black;
   text-align: justify;
   font-size: 12px;
   position: relative;
   top:12em
}
p{
   color: yellow;
}
</style>