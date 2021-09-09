<template>
    <div>
        <h1 class="category-title">{{data.title}}</h1>
        <div class="settings-block">
            <input class="search-input" type="number" v-model="searchInput" placeholder="Search by price">
            <button v-on:click.prevent="setSort" class="sort-btn">
                <p v-if="sortByPrice">Sort by id</p>
                <p v-if="!sortByPrice">Sort by price</p>
            </button>
        </div>

         <div class="goods-container">
            <ItemCard 
                v-for="item of filteredItems" :key="item.idProduct"
                v-bind:item="item"
                v-on:openItem="openItem"/>
        </div> 
        
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
export default {
    components: {
        ItemCard
    },
    async fetch({store}) {
        if (store.getters.data.length === 0) {
            await store.dispatch('fetch')
        }
    },
    methods: {
        openItem(phone) {
            this.$router.push(`/phones/${phone.type}/${phone.idProduct}`)
        },
        setSort() {
            this.sortByPrice = !this.sortByPrice;
        }
    },
    data() {
        return {
            searchInput: "",
            sortByPrice: false
        }
    },
    computed: {
        data() {
            return this.$store.getters.data.phones
        },
        filteredItems() {
            let newArr = [...this.data.goods];
            if (this.sortByPrice) {
                newArr = newArr.sort((a,b) => a.price - b.price);
            }
            if (!this.searchInput) {
                return newArr
            }
            if (this.searchInput) {
                const searchingPrice = this.searchInput.split('');
                return newArr.filter(item => {
                        for (let i = 0; i < searchingPrice.length; i++) {
                            if (searchingPrice[i] != item.price.toString().split('')[i]) {
                                return false
                            } else if(i == searchingPrice.length - 1) {
                                return true
                            } else {
                                continue
                            }
                        }
                })
            }
        }
    }
}
</script>

<style>
.category-title {
    text-align: center;
    margin-bottom: 20px;
}
.goods-container{
    display: flex;
    justify-content: space-around;
}
.goods-card{
    width: 250px;
    background-color: rgb(230,230,230);
    padding: 15px;
}
</style>