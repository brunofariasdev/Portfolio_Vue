<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
    name: 'home',

    components: {
        Sidebar
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 4fr;
    background-color: #0A2463;
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
    overflow-y: auto;
}
</style>