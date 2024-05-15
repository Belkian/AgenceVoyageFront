<script setup>

import { useRoute } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import FormContact from "@/components/FormContact.vue";
import gql from "graphql-tag";
import { ref } from "vue";
const route = useRoute();

const voyageDestination = route.params.destination;
const { result, loading, error } = useQuery(gql`
query {
    VoyageByDestination(destination: "${voyageDestination}")  {
        prix
        id
        destination
        description
        Pays {
        pays
        }
        voyagehasimageSet {
            id
            idImageVoyage {
                id
                url
            }
        }
    }
}`);


let loop = ref(0);

function goNext() {
    loop.value++
    if (loop.value >= result._value.VoyageByDestination.voyagehasimageSet.length) {
        loop.value = 0
    }
    return loop;
}

function goPrev() {
    loop.value--
    if (loop.value < 0) {
        loop.value = result._value.VoyageByDestination.voyagehasimageSet.length - 1;
    }
    return loop;
}

</script>

<template>
    <div v-if="loading" class="text-center text-3xl font-bold">Loading...</div>
    <div v-else-if="error" class="warn">{{ error.message }}</div>
    <section v-else :set="voyage = result.VoyageByDestination">

        <div class="2xl:mx-auto md:px-6 sm:px-4">
            <div id="viewerBox" class="lg:p-10 md:p-6 p-4 bg-white dark:bg-gray-900">
                <div class="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row justify-center lg:space-x-8">
                    <div class="lg:w-max flex justify-between justify-center bg-gray-100">
                        <div class="flex items-center">
                            <button @click="goPrev()" aria-label="slide back"
                                class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                <svg class="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 16L24 32L40 48" stroke="#1F2937" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="slider w-full h-full">
                            <div id="slide" class="slide-ana lg:relative flex align-center">
                                <img :src="voyage.voyagehasimageSet[loop].idImageVoyage.url" class=""/>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <button @click="goNext()" aria-label="slide forward"
                                class="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                <svg class="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 16L40 32L24 48" stroke="#1F2937" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between p-2 items-center">
                        <h2 class="text-6xl ">{{ voyage.destination }}</h2>
                        <h3 class="text-3xl font-bold ">{{ voyage.prix }}€</h3>
                    </div>
                    <h4 class="text-2xl font-semibold p-2 ">{{ voyage.Pays.pays }}</h4>
                    <p class=" p-2">{{ voyage.description }}</p>
                </div>
            </div>
        </div>
    </section>

    <FormContact />
</template>

<style>
.slider {
    position: relative;
    overflow: hidden;
}

.slide-ana {
    height: 360px;
}

.slide-ana>div {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 0.7s;
}

@media (min-width: 200px) and (max-width: 639px) {
    .slider {
        height: 300px;
        width: 170px;
    }
}
</style>