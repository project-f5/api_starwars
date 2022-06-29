<template>
  <div>
    <img :src="src" />
    <ul>
      <li>{{ name }}</li>
      <li>{{ gender }}</li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "apiListingCards",
  data: () => ({}),
  props: {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
