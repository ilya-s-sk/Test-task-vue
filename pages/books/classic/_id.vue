<template>
    <Item v-bind:item="data" />
</template>

<script>
export default {
    async fetch({store}) {
        if (store.getters.data.length === 0) {
            await store.dispatch('fetch')
        }
    },
    computed: {
        data() {
            return this.$store.getters.data.books.goods.find(item => item.idProduct == this.$route.params.id);
        },
    },
}
</script>