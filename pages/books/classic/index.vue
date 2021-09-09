<template>
    <div>
        <h1 class="category-title">Books</h1>
        <p class="subcategory-title">Classic</p>
        <div class="goods-container">
            <ItemCard 
                v-for="item of data" :key="item.idProduct"
                v-bind:item="item"
                v-on:openItem="openItem"/>
        </div>
    </div>
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
            return this.$store.getters.data.books.goods.filter(book => book.genre === 'classic');
        },
    },
    methods: {
        openItem(book) {
            this.$router.push(`/books/${book.genre}/${book.idProduct}`)
        }
    }
}
</script>