<template>
      <div class="min-h-screen flex flex-col">
<header class="fixed top-0 left-0 w-full z-50">
  <Topbar/>
  <Navbar/>
</header>
   <main class="flex-1">
        <Hero/>

<SearchSection/>

<Statistics/>

<Categories/>

<Managers/>

<Features/>

<FAQ/>
    </main>

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