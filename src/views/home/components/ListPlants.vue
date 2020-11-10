<template>
  <div>
    <h1 class="title font-bold text-xl mb-4">
      Mis plantas
    </h1>
    <ul>
      <li>
        <button
          class="border border-black text-3xl rounded-full py-1 px-3"
          @click="goToCreatePlant"
        >
          +
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ROUTES } from '@/constants';
export default {
  name: 'ListPlants',
  methods: {
    goToCreatePlant() {
      this.$router.push({ name: ROUTES.ADD.name });
    }
  }
};
</script>
