<script setup></script>
<template>
   <div class="cards-list">
      <div class="card 1">
         <div class="card_image">
            <img src="../../assets/Planets/jupiter.jpg" />
         </div>
         <div class="card_title title-white">
            <p>Jupiter</p>
         </div>
      </div>


      <div class="card 2">
         <div class="card_image"></div>
         <div class="card_title title-white">
          <ul>
            <li>The Sun goes through ups and downs in activity like solar flares. It gets more active with more sunspots and then less active over a period of 11 years. This is called the solar cycle.</li>
           <li>The Sun has been getting slowly brighter since it was born. A couple of billions of years ago, the Sun was a little dimmer than it is now.</li>
           <li>The Sun contains almost ALL of the material in our solar system. 99% of it. All the planets, asteroids and comets add up to less than 1% of the total.</li>
           <li>The Sun is so far away that it takes light about 8 minutes and 20 seconds for it to get to us – and light is the fastest thing in the universe.</li>
         </ul>
         </div>
      </div>
           

      <div class="card 3">
         <div class="card_image"></div>
         <div class="card_title title-white">
            <p>Time</p>
         </div>
      </div>


      <div class="card 4">
        
         <div class="card_title title-white">
            <p class="structure">First of all, you should never look directly at the Sun without very special protective eyewear. But NASA has many great pictures of the Sun for you to look at! Scientists use telescopes with filters to capture images of the Sun.
                These images help us learn about our star. The photo below was taken by a NASA spacecraft called the Solar Dynamics Observatory.</p>
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