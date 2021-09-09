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
export default {
    // async asyncData({$axios}){
    //     const data = await $axios.$get('/data.json');
    //     return {data}
    // },
    async fetch({store}) {
        if (store.getters.data.length === 0) {
            await store.dispatch('fetch')
        }
    },
    methods: {
        openItem(book) {
            this.$router.push(`/books/${book.genre}/${book.idProduct}`)
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
            return this.$store.getters.data.books
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
.subcategory-title{
    text-align: center;
    margin-bottom: 20px;
}
.settings-block {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    padding: 0 50px;
}
.search-input {
    width: 350px;
    margin-right: 30px;
    padding: 10px 15px;
    border-radius: 20px;
    border: none;
    background-color: rgb(230,230,230);
    font-size: 18px;
    
}
.search-input:focus{
    outline: none;
}
.sort-btn {
    padding: 5px 10px;
    border: none;
    border-radius: 15px;
    background-color:dodgerblue;
    color: #fff;
    font-size: 18px;
    width: 150px;
}

.goods-container{
    display: flex;
    justify-content: space-around;
}
</style>