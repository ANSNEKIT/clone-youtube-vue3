<template>
    <div
        ref="modalRef"
        tabindex="-1"
        class="max-h-fit fixed flex justify-center items-start inset-0 z-50 focus:outline-none"
        @keydown.esc="onClose"
    >
        <Transition
            appear
            enter-active-class="ease-out duration-200"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <AppShadow v-if="isOpen" :opacity="80" @click="onClose" />
        </Transition>

        <div
            v-if="isOpen"
            class="my-8 relative z-50 bg-white w-full sm:w-2/3 max-w-2xl overflow-auto"
            style="max-height: calc(100vh - 64px)"
        >
            <div id="header" class="pl-8 flex w-full items-start">
                <h2 v-if="title" class="pt-12 pb-6 flex-1 text-[24px] leading-8">{{ title }}</h2>

                <AppButton
                    v-if="isShowButtonClose"
                    class="m-2"
                    btn-class="hover:bg-black/10 active:!shadow-inherit active:bg-black/20 focus:!outline focus:!outline-2 focus:!bg-transparent"
                    @click="onClose"
                >
                    <IconClose class="w-[24px] h-[24px] text-[#333]" />
                </AppButton>
            </div>
            <div class="p-7">
                <slot />
            </div>
            <div v-if="$slots.footer" class="py-2 flex justify-end items-center">
                <slot name="footer" :close="onClose" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import IconClose from '@/components/icons/IconClose.vue'
import AppButton from '@/components/base/AppButton.vue'
import AppShadow from '@/components/base/AppShadow.vue'

defineProps({
    title: {
        type: String,
        default: '',
    },
    isShowButtonClose: {
        type: Boolean,
        default: true,
    },
})
const emit = defineEmits(['closeModal'])

const modalRef = ref<HTMLElement | null>(null)
const isOpen = ref(true)

onMounted(() => {
    modalRef.value?.focus()
})

const onClose = () => {
    isOpen.value = false

    setTimeout(() => {
        emit('closeModal')
    }, 100)
}
</script>
