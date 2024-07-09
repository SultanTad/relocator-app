<template>
  <div class="map">
    <VueChart
      ref="map"
      :option="option"
      autoresize
      @click="$emit('select', $event)"
    />
  </div>
</template>

<script setup>
import { use, registerMap } from "echarts/core";
import { ScatterChart, MapChart } from "echarts/charts";
import { GeoComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VueChart from "vue-echarts";

import getData from "./data/map";
import worldMap from "./data/world.json";

use([CanvasRenderer, ScatterChart, GeoComponent, TooltipComponent, MapChart]);
registerMap("world", worldMap);

const option = ref(getData());
</script>

<style scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
