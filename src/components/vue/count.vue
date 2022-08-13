<template>
<div>
{{count}}
<button @click="onclick" class=" text-base text-red-500">+1</button>
</div>
</template>
<script setup lang="ts" >
import { ref } from "vue";
const count = ref(0)
const onclick = () => count.value = count.value +1
</script>