<script setup></script>
<template>
   <div class="cards-list">
      <div class="card 1">
         <div class="card_image">
            <img src="../../assets/Planets/tierra.webp" />
         </div>
         <div class="card_title title-white">
            <p>EARTH</p>
         </div>
      </div>


      <div class="card 2">
         <div class="card_image"></div>
         <div class="card_title title-white">
          <ul>
            <li>Earth is a terrestrial planet. It is small and rocky.</li>
           <li>Earth's atmosphere is the right thickness to keep the planet warm so living things like us can be there. It’s the only planet in our solar system we know of that supports life.
             It is mostly nitrogen, and it has plenty of oxygen for us to breathe.</li>
          
         </ul>
         </div>
      </div>
           

     


      <div class="card 4">
        
         <div class="card_title title-white">
            <p class="structure">
                Our atmosphere is made mostly of nitrogen and has plenty of oxygen for us to breathe. The atmosphere also protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface as meteorites.
                Since we live here, you might think we know all there is to know about Earth. Not at all, actually! We have a lot we can learn about our home planet. Right now, there are many satellites orbiting Earth taking pictures and measurements. This is how we can learn more about weather, oceans, soil, climate change, and many other important topics.
                </p>
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
   width: 350px;
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
   top:12em;
   margin: 2em;
}
p{
   color: yellow;
}
</style>