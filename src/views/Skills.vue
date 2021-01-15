<template>
    <div id="skills">
            <h1>Minhas Skills</h1>
            <li>
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>
                <i class="fab fa-vuejs"></i>
                <i class="fab fa-git-square"></i>
                <i class="fab fa-github"></i>
                <i class="fab fa-linux"></i>
            </li>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
     #skills{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }
    #skills h1{
        color: #0A2463;
    }
    #skills li{
        list-style: none;
    }
    #skills li i{
        font-size: 4rem;
        color: #008080;
        padding: .7rem;
        cursor: pointer;
    }
    #skills li i:hover{
        color: #029696;
    }
</style>