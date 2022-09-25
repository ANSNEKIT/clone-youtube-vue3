<template>
    <div class="max-w-[220px] group">
        <div>
            <div class="relative">
                <a href="#" class="outline-none">
                    <img
                        class="max-h-full max-w-full object-contain"
                        :src="videoImg"
                        alt="unsplash-preview"
                    />
                </a>
            </div>
            <div id="details" class="pt-3 flex relative">
                <div class="pl-1 pr-7 w-full flex">
                    <a
                        href="#"
                        class="block focus:outline focus:outline-red-400 focus:outline-2 rounded-sm"
                    >
                        <h3 class="mb-2 text-base 2xl:text-lg font-medium leading-6 line-clamp-2">
                            #shorts Basic Website Design in HTML/CSS #creative effect #tutorial
                            #shorts #photoshop #video CODING
                        </h3>
                        <p class="text-[#606060] text-sm 2xl:text-base cursor-pointer">
                            2&nbsp;млн просмотров
                        </p>
                    </a>
                </div>
                <div class="">
                    <button
                        class="invisible flex items-center justify-center rounded-full w-[24px] h-[24px] transition group-hover:visible active:bg-black/10 active:border active:border-gray-200 focus:visible focus:bg-black/10"
                    >
                        <IconMore class="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconMore from '@/components/icons/IconMore.vue'

const props = defineProps({
    id: {
        type: Number,
        default: 1,
    },
})

const videoImg = `https://source.unsplash.com/random/406x720?sig=${props.id}`
</script>
