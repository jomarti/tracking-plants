<template>
  <section class="mt-20">
    <div class="flex justify-center">
      <img class="w-48" src="@/assets/images/cactus.svg" alt="Imagén Cactus" />
    </div>
    <h1 class="font-bold text-2xl text-center mt-2">Nueva Planta</h1>
    <AddPlantForm
      :plants="plants"
      @submit-form="onSubmit"
      @find-plant="findPlant"
      @clear-items="clearItems"
    ></AddPlantForm>
  </section>
</template>

<script>
import AddPlantForm from './components/AddPlantForm';
import { PlantsService } from '@/services';
import { mapActions } from 'vuex';

export default {
  name: 'AddView',
  components: {
    AddPlantForm
  },
  data: () => ({
    plants: []
  }),
  methods: {
    ...mapActions({
      savePlant: 'plants/savePlant'
    }),
    async findPlant(value) {
      this.plants = await PlantsService.findPlant(value);
    },
    onSubmit(currentPlant) {
      this.savePlant(currentPlant);
    },
    clearItems() {
      this.plants = [];
    }
  }
};
</script>
