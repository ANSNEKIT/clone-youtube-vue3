<template>
    <AppModal :is-show-button-close="false">
        <h3 class="mb-4 text-lg text-black">Пожаловаться на поисковые подсказки</h3>

        <TheSearchPredictionList
            v-model="selectedSearchPredictions"
            :predictions="searchPredictions"
        />

        <h2 class="mt-5 text-sm text-[#606060]">Какие нарушения вы обнаружили в подсказках?</h2>

        <TheSearchPredictionCategories v-model="selectedCategory" :categories="categories" />

        <div class="mt-6 text-[#333]">
            <AppTextarea
                v-model="message"
                placeholder="Предоставьте дополнительные сведения (необязательно)"
                :limit="500"
                rows="2"
            />
        </div>

        <template #footer="{ close }">
            <AppButtonDefault class="mr-3" @click="close"> Отмена </AppButtonDefault>
            <AppButtonDefault class="mr-3" :disabled="isDisabled"> Отправить </AppButtonDefault>
        </template>
    </AppModal>
</template>

<script setup lang="ts">
import AppModal from '@/components/base/AppModal.vue'
import { computed, PropType, ref } from 'vue'
import TheSearchPredictionList from '@/components/Search/TheSearchPredictionList.vue'
import { Keyword } from '@/types/search'
import AppButtonDefault from '@/components/base/AppButtonDefault.vue'
import TheSearchPredictionCategories from './TheSearchPredictionCategories.vue'
import AppTextarea from '@/components/base/AppTextarea.vue'

defineProps({
    searchPredictions: {
        type: Array as PropType<Array<Keyword>>,
        default: () => [],
    },
})

const selectedSearchPredictions = ref<string[]>([])
const selectedCategory = ref('')
const message = ref('')

const isDisabled = computed(() => {
    return selectedSearchPredictions.value.length === 0 && !selectedCategory.value && !message.value
})

const categories = [
    'Проявления нетерпимости и призывы к ней',
    'Материалы сексуального характера',
    'Призывы к насилию и проявлению жестокости',
    'Призывы к совершению опасных действий и причинению вреда окружающим',
    'Другое',
]
</script>
