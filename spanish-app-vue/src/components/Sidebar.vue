<template>
<div>
    <!-- <nav class="navbar">
        <span class="open-slide"> 
            <a href="">
            <svg width="30" height="30">
                <path d="M0,5 30,5" stroke="#000" stroke-width="5"/>
                <path d="M0,14 30,14" stroke="#000" stroke-width="5"/>
                <path d="M0,23 30,23" stroke="#000" stroke-width="5"/>
            </svg>
            </a>
        </span> 
        
        <ul class="navbar-nav">
            <li><a>Home</a></li>
            <li><a>Basic</a></li>
            <li><a>Intermediate</a></li>
            <li><a>Advanced</a></li>
        </ul>
    </nav> -->
    <div id="side-menu" class="side-nav">
        <a href="" class="btn-close" onclick="closeSlideMenu()">&times;</a>
        <a href="">Basic</a>
        <a href="">Intermediate</a>
        <a href="">Advanced</a>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        closeSlideMenu() {
            document.getElementById('side-menu').style.width = '0';
            document.getElementById('basic').style.marginLeft = '0';
        }
    }
}
</script>

<style scoped>

</style>