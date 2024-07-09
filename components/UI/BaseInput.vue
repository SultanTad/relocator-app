<template>
  <q-input class="form__input" dense>
    <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </q-input>
</template>

<style>
.form__input {
  width: 250px;
}
</style>
