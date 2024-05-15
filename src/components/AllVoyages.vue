<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
  Voyages: {
    type: Array,
    required: true,
  },
});

const TailleCards = ["sm:w-1/2 md:w-1/3 xl:w-1/4 relative my-4"]

</script>

<template>

  <div class="flex justify-center items-center">
    <div class="2xl:mx-auto lg:px-16 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">Tous nos Voyages</h1>
        <p class="text-xl leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          If you're looking for random paragraphs, you've come to the right place. When a random word or a random
          sentence isn't quite enough</p>
      </div>

      <div class="lg:flex md:mt-12 mt-8">
        <div class="sm:flex flex-wrap xl:gap-x-8 gap-x-6 justify-center">
          <div v-for="voyage in props.Voyages" :key="voyage.id" :class="TailleCards[0]">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute bottom-0 left-0 p-6 bg-sky-600/50 rounded-tr-2xl rounded-bl-xl">
                <h2 class="text-3xl font-semibold text-white">{{ voyage.destination }}</h2>
                <p class="text-base leading-4 text-white mt-2">{{ voyage.Pays.pays }}</p>
                <h3 class="text-2xl font-semibold text-white">{{ voyage.prix }}€</h3>
                <RouterLink :to="{ name: 'voyage', params: { destination: voyage.destination } }"
                  class="text-xl font-bold text-yellow-300">Réserver maintenant
                </RouterLink>
              </div>
            </div>
            <div>
              <img class="w-full flex h-80 xl:h-80 xl:w-80 rounded-xl" :src="voyage.voyagehasimageSet[0].idImageVoyage.url"
                alt="" /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>