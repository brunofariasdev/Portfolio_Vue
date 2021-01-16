<template>
    <div id="container">
        <div id="profile">
            <img  src="https://avatars1.githubusercontent.com/u/64233765?s=400&u=c460bdb026698732a212a70d48eefa162aef1c00&v=4" alt="Profile">
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
        <div id="menu-items">
            <router-link to="/" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Sobre
                </div>
            </router-link>
            <router-link to="/messages" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Skills
                </div>
            </router-link>
            <router-link to="/profile" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Projetos
                </div>
            </router-link>
        </div>
            


    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>      
    #container{
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center; 
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
        color: #ffffff;
        font-size: 1rem;
        font-weight: bold;
    }

    #profile a i{
        font-size: 2rem; 
        padding: 0 .4rem;
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

    #menu-items{
        display: flex;
        flex-direction: column;
        
    }
    
    .menu-item:hover{
        color: #fff;
    }
    #social a i{
        color: white;
        font-size: 1.6rem;
    }
    .link-container{
        outline: none;
        cursor: pointer;
        border-radius: 3rem;
        margin: 1rem 0;
        width: 8rem;
        height: 2.4rem;
        background-color: rgb(255, 255, 255);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0A2463;  
    }
    .link-container:hover{
        background: #e6e5e5;
    }
    .link-container:focus{
        outline: none;
    }
    .link-container.active{
        background-color: aqua;
    }
    .side-btn{
        background:none;
        border: none;
    }



/*
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: teal;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
    height: 30px;
    width: 30px;
    background-color: white;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: teal;
}

*/
</style>