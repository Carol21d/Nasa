<script setup></script>
<template>
   <div class="cards-list">
      <div class="card 1">
         <div class="card_image">
            <img src="../../assets/Planets/mars.jpg" />
         </div>
         <div class="card_title title-white">
            <p>Mars</p>
         </div>
      </div>


      <div class="card 2">
         <div class="card_image"></div>
         <div class="card_title title-white">
          <ul>
          <li>Mars is a terrestrial planet. It is small and rocky.</li>
          <li>Mars has a thin atmosphere.</li>
          <li>Mars has an active atmosphere, but the surface of the planet is not active. Its volcanoes are dead.</li>
         </ul>
         </div>
      </div>
           

    


      <div class="card 4">
        
         <div class="card_title title-white">
            <p class="structure">Like Earth, Mars has seasons, polar ice caps, volcanoes, canyons, and weather. It has a very thin atmosphere made of carbon dioxide, nitrogen, and argon.

There are signs of ancient floods on Mars, but now water mostly exists in icy dirt and thin clouds. On some Martian hillsides, there is evidence of liquid salty water in the ground.

Scientists want to know if Mars may have had living things in the past. They also want to know if Mars could support life now or in the future.</p>
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