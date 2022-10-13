<template>
    <section
        ref="categoriesWrapRef"
        class="fixed top-[56px] h-[56px] z-[7]"
        :class="{
            'md:ml-[72px]': sidebarState === 'compact',
            'xl:ml-[240px]': sidebarState === 'normal',
        }"
        :style="{ maxWidth: !isMobile ? `calc(100% - ${sidebarWidth}px)` : '100%' }"
    >
        <div
            class="border-y border-y-black/10 relative bg-white bg-opacity-95 overflow-hidden whitespace-nowrap"
        >
            <CategoryNavButton
                v-show="isShowLeft"
                class="left-0"
                :left="true"
                @nav-button-click="onLeft"
            >
                <IconArrowLeft width="16" height="16" class="w-4.5 h-4.5" />
            </CategoryNavButton>

            <div
                ref="categoriesRef"
                class="inline-block transition"
                :style="caterogiesTranslateStyle"
            >
                <ul
                    class="px-6 py-[11px] first-letter:py-[11px] mx-auto w-full flex gap-x-2 max-w-screen-4xl overflow-x-auto"
                >
                    <CategoryItem
                        v-for="(category, index) in categories"
                        :id="index"
                        :key="index"
                        :is-active="index === activeItemIndex"
                        :category="category"
                        @change-active-category="activeItemIndex = $event"
                    />
                </ul>
            </div>

            <CategoryNavButton
                v-show="isShowRight"
                :right="true"
                class="right-0"
                @nav-button-click="onRight"
            >
                <IconArrowRight width="20" height="20" class="w-[20px] h-[20px]" />
            </CategoryNavButton>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import CategoryItem from '@/components/Categories/CategoryItem.vue'
import CategoryNavButton from '@/components/Categories/CategoryNavButton.vue'
import { useCategoris } from '@/composables/categories'

const {
    isMobile,
    sidebarState,
    sidebarWidth,
    categoriesRef,
    categoriesWrapRef,
    activeItemIndex,
    categories,
    caterogiesTranslateStyle,
    isShowRight,
    isShowLeft,
    throttledResize,
    onRight,
    onLeft,
} = useCategoris()

watch(
    () => sidebarWidth.value,
    () => throttledResize(),
)

onMounted(() => {
    throttledResize()
    window.addEventListener('resize', throttledResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', throttledResize)
})
</script>
