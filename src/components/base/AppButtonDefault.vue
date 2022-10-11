<template>
    <button
        class="py-[10px] px-[16px] flex justify-center items-center uppercase text-base leading-4 font-medium rounded-sm active:bg-black/10"
        :class="{ 'text-neutral-400 active:bg-transparent': $attrs.disabled }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts"></script>
