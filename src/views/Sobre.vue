<template>
    <div id="overview">
        <h3>Sobre Mim</h3>
        <div id="content">
            <img id="img-perfil" src="../assets/about.svg" alt="About">
            <h3>Olá meu nome e Bruno, desenvolvedor Front-end tenho 20 anos moro em Delta-MG, 
            <br> amo tecnologia e programação me apaixonei pelo front-end em 2018 e deis de então<br>
             iniciei minha jornada em busca de me tonar um desenvolvedor front-end,hoje uso<br> 
             VueJs e NextJS para desenvolver minhas aplicações,procuro me manter sempre atualizado<br>
             sobre tudo do mundo front-end, como um bom  amante de javascript tento sempre melhorar o<br>  
             meu código tentando deixá-lo cada vez mais limpo e legível.</h3>
        </div>
       
        


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#overview {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 40px;
    font-weight: 600;
}

#overview h3{
    color: #0A2463

}
#img-perfil{
    height: 12rem;
    border-radius: 2%;

}
#content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
#content h3{
    font-size: .9rem;
    text-align: start;
}

</style>