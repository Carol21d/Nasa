<script>
</script>
<template>
    <div class="menu">
        <button type="text" name="description" class="btn btn-description"><span>DESCRIPTION</span></button>
        <button type="text" name="curiosidades" class="btn btn-curiosidades"><span>CURIOSITIES</span></button>
        <button type="text" name="weather" class="btn btn-weather"><span>WEATHER IN</span></button>
        <button type="text" name="structure" class="btn btn-structure"><span>STRUCTURE & SURFACE</span></button>

    </div>
</template>
<style lang="scss" scoped>
.menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4em;

    .btn {
        width: 18em;
        height: 4em;
        color: #070707;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5), 7px 7px 20px 0px rgba(0, 0, 0, .1), 4px 4px 5px 0px rgba(0, 0, 0, .1);
        outline: none;


    }


    .btn-description {
        background: rgb(10, 10, 10);
        color: white;
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border-color: white;
        border: none;



    }

    .btn-description span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .btn-description:before,
    .btn-description:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgba(2, 126, 251, 1);
        transition: all 0.3s ease;
    }

    .btn-description:before {
        height: 0%;
        width: 2px;
    }

    .btn-description:after {
        width: 0%;
        height: 2px;
    }

    .btn-description:hover {
        background: transparent;
        box-shadow: none;
    }

    .btn-description:hover:before {
        height: 100%;
    }

    .btn-description:hover:after {
        width: 100%;
    }

    .btn-description span:hover {
        color: rgba(2, 126, 251, 1);
    }

    .btn-description span:before,
    .btn-description span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: rgba(2, 126, 251, 1);
        transition: all 0.3s ease;
    }

    .btn-description span:before {
        width: 2px;
        height: 0%;
    }

    .btn-description span:after {
        width: 0%;
        height: 2px;
    }

    .btn-description span:hover:before {
        height: 100%;
    }

    .btn-description span:hover:after {
        width: 100%;
    }

    .btn-curiosidades {
        background: rgb(10, 10, 10);
        color: white;
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border-color: white;
        border: none;



    }

    .btn-curiosidades span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .btn-curiosidades:before,
    .btn-curiosidades:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgb(25, 150, 35);
        transition: all 0.3s ease;
    }

    .btn-curiosidades:before {
        height: 0%;
        width: 2px;
    }

    .btn-curiosidades:after {
        width: 0%;
        height: 2px;
    }

    .btn-curiosidades:hover {
        background: transparent;
        box-shadow: none;
    }

    .btn-curiosidades:hover:before {
        height: 100%;
    }

    .btn-curiosidades:hover:after {
        width: 100%;
    }

    .btn-curiosidades span:hover {
        color:  rgb(25, 150, 35);
       
    }

    .btn-curiosidades span:before,
    .btn-curiosidades span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background:  rgb(25, 150, 35);
        transition: all 0.3s ease;
    }

    .btn-curiosidades span:before {
        width: 2px;
        height: 0%;
    }

    .btn-curiosidades span:after {
        width: 0%;
        height: 2px;
    }

    .btn-curiosidades span:hover:before {
        height: 100%;
    }

    .btn-curiosidades span:hover:after {
        width: 100%;
    }


    .btn-weather {
        background: rgb(10, 10, 10);
        color: white;
        width: 130px;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border-color: white;
        border: none;



    }

    .btn-weather span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .btn-weather:before,
    .btn-weather:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgb(251, 164, 2);
        transition: all 0.3s ease;
    }

    .btn-weather:before {
        height: 0%;
        width: 2px;
    }

    .btn-weather:after {
        width: 0%;
        height: 2px;
    }

    .btn-weather:hover {
        background: transparent;
        box-shadow: none;
    }

    .btn-weather:hover:before {
        height: 100%;
    }

    .btn-weather:hover:after {
        width: 100%;
    }

    .btn-weather span:hover {
        color: rgb(251, 164, 2);
    }

    .btn-weather span:before,
    .btn-weather span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: rgb(251, 164, 2);
        transition: all 0.3s ease;
    }

    .btn-weather span:before {
        width: 2px;
        height: 0%;
    }

    .btn-weather span:after {
        width: 0%;
        height: 2px;
    }

    .btn-weather span:hover:before {
        height: 100%;
    }

    .btn-weather span:hover:after {
        width: 100%;
    }

    .btn-structure {
        background: rgb(10, 10, 10);
        color: white;
        width: 13em;
        height: 40px;
        line-height: 42px;
        padding: 0;
        border-color: white;
        border: none;



    }

    .btn-structure span {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
    }

    .btn-structure:before,
    .btn-structure:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        background: rgb(251, 2, 2);
        transition: all 0.3s ease;
    }

    .btn-structure:before {
        height: 0%;
        width: 2px;
    }

    .btn-structure:after {
        width: 0%;
        height: 2px;
    }

    .btn-structure:hover {
        background: transparent;
        box-shadow: none;
    }

    .btn-structure:hover:before {
        height: 100%;
    }

    .btn-structure:hover:after {
        width: 100%;
    }

    .btn-structure span:hover {
        color: rgb(251, 2, 2);
    }

    .btn-structure span:before,
    .btn-structure span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        background: rgb(251, 2, 2);
        transition: all 0.3s ease;
    }

    .btn-structure span:before {
        width: 2px;
        height: 0%;
    }

    .btn-structure span:after {
        width: 0%;
        height: 2px;
    }

    .btn-structure span:hover:before {
        height: 100%;
    }

    .btn-structure span:hover:after {
        width: 100%;
    }




}
</style>