<template>
    <div>
        <h1 class="category-title">Phones</h1>
        <p class="subcategory-title">Android</p>
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
            return this.$store.getters.data.phones.goods.filter(phone => phone.type === 'android');
        },
    },
    methods: {
        openItem(phone) {
            this.$router.push(`/phones/${phone.type}/${phone.idProduct}`)
        }
    }
}
</script>

