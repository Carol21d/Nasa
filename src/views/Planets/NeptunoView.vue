<script setup></script>
<template>
   <div class="cards-list">
      <div class="card 1">
         <div class="card_image">
            <img src="../../assets/Planets/neptuno.jpg" />
         </div>
         <div class="card_title title-white">
            <p>Neptune</p>
         </div>
      </div>


      <div class="card 2">
         <div class="card_image"></div>
         <div class="card_title title-white">
          <ul>
         <li>Neptune is encircled by six rings.</li>
         <li>Neptune, like Uranus, is an ice giant. It’s similar to a gas giant. It is made of a thick soup of water, ammonia, and methane flowing over a solid core about the size of Earth.</li>
         <li>Neptune has a thick, windy atmosphere</li>
         
         </ul>
         </div>
      </div>
           

    


      <div class="card 4">
        
         <div class="card_title title-white">
            <p class="structure">Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. It's more than 30 times as far from the sun as Earth is. Neptune is very similar to Uranus. It's made of a thick fog of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane. The methane gives Neptune the same blue color as Uranus. Neptune has six rings, but they're very hard to see.</p>
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