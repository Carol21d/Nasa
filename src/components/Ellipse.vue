<template>
    <div class="ellipses-container">
      <div class="ellipses ellipses__outer--thin">
        <div class="ellipses ellipses__orbit"></div>
        <div class="ellipses ellipses__orbit2"></div>
       
      </div>
      <div class="ellipses ellipses__outer--thick"></div>
    </div>
  </template>
  
  <style lang="scss">
  .ellipses-container {
    width: 35.9rem;
    height: 35.9rem;
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    top: 9rem;
  }
  
  .ellipses {
    border-radius: 50%;
    position: absolute;
    top: 0;
    border-style: solid;
  }
  
  .ellipses__outer--thin {
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-color: rgba(253, 253, 253, 0.1);
    animation: ellipsesOrbit 15s ease-in-out infinite;
  }
  
  .ellipses__outer--thick {
    width: 99.5%;
    height: 99.5%;
    border-color: rgb(248, 245, 245) transparent;
    border-width: 2px;
    transform: rotate(-45deg);
    animation: ellipsesRotate 15s ease-in-out infinite;
  }
  
  .ellipses__orbit {
    width: 1.5rem;
    height: 1.5rem;
    border-width: 2px;
    border-color: rgb(248, 248, 247);
    top: 0.6rem;
    right: 24.374rem;
  }
  
  .ellipses__orbit:before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    background-color: rgb(247, 246, 243);
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .ellipses__orbit2 {
    width: 1.5rem;
    height: 1.5rem;
    border-width: 2px;
    border-color: rgb(255, 255, 255);
    top: 30.1rem;
    right: 4.755rem;
  }
  
  .ellipses__orbit2:before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    display: inline-block;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    left: 0;
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  
  @keyframes ellipsesRotate {
    0% {
      transform: rotate(-45deg);
    }
  
    100% {
      transform: rotate(-405deg);
    }
  }
  
  @keyframes ellipsesOrbit {
    0% {
      transform: rotate(0);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  