<script setup></script>
<template>

  <div class="container-menu">

 
    <div class="modal-container">
        <input id="modal-toggle-comet" type="checkbox">
        <label class="modal-btn" for="modal-toggle-comet">What is a Comet?</label>
        <label class="modal-backdrop" for="modal-toggle-comet"></label>
        <div class="modal-content">
        <label class="modal-close" for="modal-toggle-comet">&#x2715;</label>
        <h2>The answer is ...</h2>
        <p>Comets are large objects made of dust and ice that orbit the Sun. Best known for their long, streaming tails, these ancient objects are leftovers from the formation of the solar system 4.6 billion years ago.</p>
      </div>
    </div>
      
        
    <div class="modal-container">
        <input id="modal-toggle-asteroid" type="checkbox">
        <label class="modal-btn" for="modal-toggle-asteroid">Asteroid or Meteor?</label>
        <label class="modal-backdrop" for="modal-toggle-asteroid"></label>
        <div class="modal-content">
        <label class="modal-close" for="modal-toggle-asteroid">&#x2715;</label>
        <h2>The answer is ...</h2>
        <p>An asteroid is a small rocky object that orbits the Sun. Asteroids are smaller than a planet, but they are larger than the pebble-size objects we call meteoroids. A meteor is what happens when a meteoroid – a small piece of an asteroid or comet – burns up upon entering Earth’s atmosphere, creating a streak of light in the sky.</p>
      </div>
    </div>

    <div class="modal-container">
        <input id="modal-toggle-barycenter" type="checkbox">
        <label class="modal-btn" for="modal-toggle-barycenter">What Is a Barycenter?</label>
        <label class="modal-backdrop" for="modal-toggle-barycenter"></label>
        <div class="modal-content">
        <label class="modal-close" for="modal-toggle-barycenter">&#x2715;</label>
        <h2>The answer is ...</h2>
        <p>We say that planets orbit stars, but that’s not the whole truth. Planets and stars actually orbit around their common center of mass. This common center of mass is called the barycenter. Barycenters also help astronomers search for planets beyond our solar system</p>
      </div>
    </div>

    <div class="modal-container">
        <input id="modal-toggle-lunar" type="checkbox">
        <label class="modal-btn" for="modal-toggle-lunar">Lunar Eclipses and Solar Eclipses</label>
        <label class="modal-backdrop" for="modal-toggle-lunar"></label>
        <div class="modal-content">
        <label class="modal-close" for="modal-toggle-lunar">&#x2715;</label>
        <h2>The answer is ...</h2>
        <p>An eclipse happens when a planet or a moon gets in the way of the Sun’s light. Here on Earth, we can experience two kinds of eclipses: solar eclipses and lunar eclipses.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: #ccc;
  overflow: hidden;
}


.container-menu{
  display: flex;
    flex-direction: column;
    position: absolute;
    right: 15em;
    top: 15em;


.modal-container {
  margin: 20px auto;
  padding-top: 0px;
  position: relative;
  width: 180px;

  .modal-btn {
    display: block;
    margin: 0 auto;
    color: #fff;
    width: 374px;
    height: 50px;
    line-height: 50px;
    background: #000000;
    font-size: 22px;
    border-style: solid;
    border-radius: 115px;
    cursor: pointer;
    text-align: center;
    box-shadow: 0 5px 5px -5px #333;
    transition: background 0.3s ease-in;

    &:hover {
      background: #1749a7;
    }
  }

  .modal-content,
  .modal-backdrop {
    height: 0;
    width: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
  }

  .modal-close {
    color: #aaa;
    position: absolute;
    right: 5px;
    top: 5px;
    padding-top: 3px;
    background: #fff;
    font-size: 16px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    &:hover {
      color: #333;
    }
  }

  .modal-content-btn {
    position: absolute;
    text-align: center;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    background: #446cb3;
    color: #fff;
    width: 50px;
    border-radius: 4px;
    font-size: 14px;
    height: 32px;
    padding-top: 9px;
    font-weight: normal;

    &:hover {
      color: #fff;
      background: #365690;
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }

  input[type="checkbox"]:checked ~ .modal-content {
    opacity: 1;
    background-color: #fff;
    max-width: 400px;
    width: 400px;
    height: 280px;
    padding: 10px 30px;
    position: fixed;
    left: calc(50% - 200px);
    top: 12%;
    border-radius: 10px;
    z-index: 999;
    pointer-events: auto;
    cursor: auto;
    visibility: visible;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);

    @media (max-width: 400px) {
      left: 0;
    }
  }
}

p {
  color: black;
}

}
</style>