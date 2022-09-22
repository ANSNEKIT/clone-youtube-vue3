<template>
    <div id="layout-default">
        <TheHeader />
        <TheSidebarMini />
        <TheSidebarMini />
        <TheSidebarMobile />

        <slot />
    </div>
</template>

<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheSidebarMini from '../components/TheSidebarMini.vue';
import TheSidebarMobile from '../components/TheSidebarMobile.vue';

</script>