<template>
    <section id="footer" class="py-4 px-6">
        <div
            id="guide-links-primary"
            class="mb-3 text-[#606060] font-medium text-sm leading-5 tracking-[0.25px]"
        >
            <a
                v-for="(item, index) in linksFirst"
                :key="index"
                class="mr-2 inline-block"
                :href="item.link"
                >{{ item.name }}</a
            >
        </div>
        <div
            id="guide-links-secondary"
            class="mb-4 text-[#606060] font-medium text-sm leading-5 tracking-[0.25px]"
        >
            <a
                v-for="(item, index) in linksSecond"
                :key="index"
                class="mr-2 inline-block"
                :href="item.link"
                >{{ item.name }}</a
            >
        </div>
        <div id="copyright">
            <p class="text-[#909090] text-[12px] leading-[16px] tracking-[0.25px]">
                © 2022 Google LLC
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
const linksFirst = [
    {
        name: 'О сервисе',
        link: 'https://www.youtube.com/about/',
    },
    {
        name: 'Прессе',
        link: 'https://www.youtube.com/about/press',
    },
    {
        name: 'Авторские права',
        link: 'https://www.youtube.com/about/copyright',
    },
    {
        name: 'Связаться с нами',
        link: '/t/contact_us',
    },
    {
        name: 'Авторам',
        link: 'https://www.youtube.com/creators/',
    },
    {
        name: 'Рекламодателям',
        link: 'https://www.youtube.com/ads/',
    },
    {
        name: 'Разработчикам',
        link: 'https://developers.google.com/youtube',
    },
]

const linksSecond = [
    {
        name: 'Условия использования',
        link: '/t/terms',
    },
    {
        name: 'Конфиденциальность',
        link: '/t/privacy',
    },
    {
        name: 'Правила и безопасность',
        link: 'https://www.youtube.com/about/policies',
    },
    {
        name: 'Как работает YouTube',
        link: 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen',
    },
    {
        name: 'Тестирование новых функций',
        link: '/new',
    },
]
</script>
