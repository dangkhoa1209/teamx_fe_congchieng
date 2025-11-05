<template>
    <nuxt-link
        v-if="to"
        no-prefetch
        class="x-link"
        :to="to"
        :target="target"
        :class="{ 'router-link-active': active }">
        <slot />
    </nuxt-link>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: [Object, String],
    required: true
  },
  active: Boolean,
  target: String
})
</script>
