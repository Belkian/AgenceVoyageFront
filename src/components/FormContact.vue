<script setup>

import axios from 'axios';
import { ref } from 'vue';


const nom = ref('');
const prenom = ref('');
const email = ref('');
const message = ref('');
const success = ref('');

function submitForm() {
    axios.post('http://127.0.0.1:8000/', {
        'nom': nom.value,
        'email': email.value,
        'prenom': prenom.value,
        'text': message.value
    }, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(function (response) {
        success = response;
    }).catch(function (error) {
        console.log(error);
    });

    nom.value = '';
    email.value = '';
    prenom.value = '';
    message.value = '';
};
</script>


<template>
    <div id="formtoken" class="bg-gray-100 pb-3">
        <p v-if='success'>{{ success }}</p>
        <div class="flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4">
            <h2 class="text-2xl md:text-3xl font-semibold text-center">Réserver ce voyage</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm">
            <div class="flex flex-col gap-1">
                <label class="font-semibold">
                    Nom <span class="text-red-500">&#42;</span>
                </label>
                <input class="border-[1px] border-white bg-gray-600 p-2 rounded-md  text-white"
                    placeholder="Ecriver votre Nom" required name="nom" v-model="nom" type="text" />
            </div>

            <div class="flex flex-col gap-1">
                <label class="font-semibold">
                    Prénom <span class="text-red-500">&#42;</span>
                </label>
                <input class="border-[1px] border-white bg-gray-600 p-2 rounded-md  text-white"
                    placeholder="Ecriver votre Prénom" required name="prenom" v-model="prenom" type="text" />
            </div>

            <div class="flex flex-col gap-1">
                <label class="font-semibold">
                    Email <span class="text-red-500">&#42;</span>
                </label>
                <input class="border-[1px] border-white bg-gray-600 p-2 rounded-md text-white"
                    placeholder="Ecriver votre Email" required name="email" v-model="email" type="email" />
            </div>



            <div class="flex flex-col gap-1 md:col-span-2">
                <label class="font-semibold">
                    Message <span class="text-red-500">&#42;</span>
                </label>
                <input class="border-[1px] border-white bg-gray-600 p-2 rounded-md  text-white"
                    placeholder="Entrer votre Message" required name="message" v-model="message" type="text" />
            </div>
        </div>

        <button @click="submitForm()"
            class=" m-auto py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white text-white flex items-center gap-2 hover:scale-95 transition-all">
            Envoyer
        </button>
    </div>
</template>
