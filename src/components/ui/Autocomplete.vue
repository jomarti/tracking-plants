<template>
  <div>
    <div>
      <input
        v-model="itemSelected"
        type="text"
        class="border py-1 px-1 capitalize rounded w-full focus:outline-none"
        @input="changeValueAutocomplete"
      />
    </div>
    <div class="border">
      <span
        v-for="item in items"
        :key="item.id"
        class="block cursor-pointer capitalize py-1 px-1 hover:font-bold hover:bg-gray-210"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Autocomplete',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    itemSelected: ''
  }),
  methods: {
    changeValueAutocomplete(event) {
      const value = event.target.value;
      this.$emit('input', value);
    },
    selectItem(item) {
      this.itemSelected = item.name;
      this.$emit('select-item', item);
    }
  }
};
</script>

<style></style>
