<template>
  <NuxtLink class="header_link-inner" :to="to">
    <q-item class="header_link" clickable v-ripple>
      <q-item-section>
        <q-item-label>
          {{ label }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      requered: true
    },
    label: {
      type: String,
      requered: true
    }
  }
}
</script>