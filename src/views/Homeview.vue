<template>
    <div>
<Topbar/>

        <Navbar/>

        <Hero/>

<SearchSection/>

<Statistics/>

<Categories/>

<Managers/>

<Features/>

<FAQ/>

<Footer/>
    </div>
</template>

<script setup lang="ts">
import Navbar from '../components/layout/Navbar.vue';
import Categories from '../components/home/Categories.vue';
import FAQ from '../components/home/FAQ.vue';
import Features from '../components/home/Features.vue';
import Hero from '../components/home/Hero.vue';
import Managers from '../components/home/Managers.vue';
import SearchSection from '../components/home/SearchSection.vue';
import Statistics from '../components/home/Statistics.vue';
import Footer from '../components/layout/Footer.vue';
import Topbar from '../components/layout/Topbar.vue';


</script>