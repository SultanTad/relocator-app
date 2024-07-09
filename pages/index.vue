<template>
  <MapComponent @select="onSelect" />
  <MapSideBar :selectedSidebar :selectedCountry @close="closeSelect" />
</template>

<script setup>
import { getCountries } from "~/api/rest/countries";

const selectedSidebar = ref(false);
const selectedCountry = ref(null);
const onSelect = async (country) => {
  selectedSidebar.value = true;
  const res = await getCountries(country.name);
  selectedCountry.value = res.data.data[0].attributes;
};
const closeSelect = () => {
  selectedSidebar.value = false;
};
</script>
