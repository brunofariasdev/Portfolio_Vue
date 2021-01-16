<template>
    <div class="profile">
        <h3>Projetos</h3>
        <div id="card-git">
            <div class="projects" v-for="infos in info" :key="infos.name">
                <h2> {{  infos.name }} </h2>
                <div class="btn-gp">
                    <a :href="infos.html_url"><i class="fab fa-github-square"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data () {
            return {
                info: null,
                
            }
        },
        mounted () {
            axios
                .get('https://api.github.com/users/brunofariasdev/repos')
                .then(response => (this.info = response.data))
        }
    }
</script>

<style scoped>
.profile {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    width: 100%;
    font-size: 40px;
    font-weight: 600;
}
.profile h3{
    color: #0A2463;
}

#card-git {
    display: flex;
    flex-direction: column;

}

#card-git h2{
    font-size: 1rem;
}
#card-git{
    display: flex;
    flex-direction: row;
    max-width: 80%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.projects{
    margin: .5rem;
    padding: .3rem;
    border-radius:3%;
    background-color: #0a2e83;
    min-width: 12rem;
    

}
.projects a{
    text-decoration: none;
    color: #eeeeee;
}

.projects a:hover{
    color: #c5c5c5;
    box-shadow: none;
}
.projects h2{
    color: #eeeeee;
}

</style>