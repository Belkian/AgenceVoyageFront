<script setup>
import AllVoyages from "@/components/AllVoyages.vue";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result, loading, error } = useQuery(gql`
  query {
    Voyage{
      prix
      id
      destination
      description
      Pays {
        pays
      }
      voyagehasimageSet {
        idImageVoyage {
          url
        }
      }
    }
  }
`);
</script>

<template>
  <div v-if="loading" class="text-center text-3xl font-bold">Loading...</div>
  <div v-else-if="error" class="warn">{{ error.message }}</div>
  <AllVoyages v-else :Voyages="result.Voyage" />
  
</template>
