<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header class="">
    <div class="wrapper">
      <nav class="flex sm:justify-between items-center justify-center p-4 bg-cyan-300 *:text-4xl *:text-black">

        <RouterLink to="/">Super Voyage</RouterLink>
        <RouterLink to="/"><span class="text-2xl">Accueil</span></RouterLink>

      </nav>
    </div>
  </header>
  <RouterView />
  <Footer />
</template>
