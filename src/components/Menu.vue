<template>
    <div id="container">
        <div id="profile">
            <img  src="https://brunofarias.net/src/perfil.jpg" alt="Profile">
            <h1>Bruno Farias</h1>
            <h2>Front-End Developer</h2>
            <p>Cada sonho que você deixa para trás,é um pedaço do seu futuro que deixa de existir.<br> <span>Jamais Desista</span></p>
            <div id="social">
                <a href="https://github.com/brunofariasdev"><i class="fab fa-github-square"></i></a>
                <a href="https://www.instagram.com/brunofarias_dev/"><i class="fab fa-instagram"></i></a>
                <a href="mailto:contato@brunofarias.net"><i class="fas fa-envelope-square"></i></a>
                <a href="https://twitter.com/BrunoDev2"><i class="fab fa-twitter"></i></a>
                <a href="https://brunofarias.net/src/icons8-linkedin.svg"><i class="fab fa-linkedin"></i></a>     
            </div>
        </div>
            <li>
                <router-link to="/" class="menu-item" active-class="active" exact tag="button">Sobre</router-link>
                <router-link to="/skills"  class="menu-item" active-class="active" exact tag="button">Skills</router-link>
                <router-link to="/projetos" class="menu-item" active-class="active" exact tag="button">Projetos</router-link>
            </li>
    </div> 
</template>


<script>
export default {
    props: {
       
    }, 
    data () {
        return {
           
        }
    }, 
    methods: {
       
    }
}
</script>


<style scoped>
    
    #container{
        background-color: #28244e;
        height: 100vh;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-right: 0.8px rgba(179, 178, 178, 0.637) solid;  
    }

    #profile{
        margin-top: .7rem;
        
    }

    #profile img{
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
    }

    h1{
        color: #fff;
        font-size: 1.8rem;
    }

    h2{
        color: rgb(179, 178, 178);
        font-size: 1rem;
        font-weight: 100;
    }

    #profile a i{
        font-size: 2rem; 
        padding: .6rem;
        color: #fff;
    
    }

    #profile a i:hover{
        color: rgb(179, 178, 178);;
    }

    #menu{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .menu-active{
        color: #fff;
    }

    p{
        font-size: .8rem;
        padding: .6rem;
        color: #fff;
    }

    span{
        font-weight: bold;
        font-size: .9rem;
    }

    li{
        display: flex;
        flex-direction: column;
    }

    .menu-item{
        text-decoration: none;
        font-size: 1.5rem;
        color: rgb(179, 178, 178);;
        cursor: pointer;
    }
    
    .menu-item:hover{
        color: #fff;
    }


</style>>

