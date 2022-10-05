<template>
    <div
        id="center"
        class="w-full xl:w-[728px] ml-10 flex items-center justify-end xl:justify-between"
    >
        <TheSearch class="hidden sm:flex" />

        <AppButton tooltip="Голосовой поиск" :btn-class="'ml-2 hidden sm:flex bg-black/5'">
            <IconMicrophone class="w-[24px] h-[24px] text-black" />
        </AppButton>
    </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/base/AppButton.vue'
import IconMicrophone from '@/components/icons/IconMicrophone.vue'
import TheSearch from '@/components/Search/TheSearch.vue'
</script>
