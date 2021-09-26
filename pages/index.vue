<template>
    <div class="home">
        <AddProductForm @addProduct="addProduct"/>
        <Catalog :products="sortedProducts"
                 :deleteProduct="deleteProduct"
                 @onSelectChange='onSelectChange'/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'Наименование товара',
                    price: '10000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                    imageUrl: 'img.png',
                    id: 1
                },
                {
                    name: 'Наименование товара',
                    price: '15000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                     imageUrl: 'img.png',
                    id: 2
                },
                {
                    name: 'Наименование товара',
                    price: '20000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                     imageUrl: 'img.png',
                    id: 3
                },
                {
                    name: 'Наименование товара',
                    price: '10000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                    imageUrl: 'img.png',
                    id: 4
                },
                {
                    name: 'Наименование товара',
                    price: '10000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                     imageUrl: 'img.png',
                    id: 5
                },
                {
                    name: 'Наименование товара',
                    price: '10000',
                    description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк.',
                     imageUrl: 'img.png',
                    id: 6
                }
            ],
            sortFilter: 'default'
        }
    },
    methods: {
        addProduct(item) {
            let id = this.getRandomNum();
            while (this.products.find(el => el.id === id)) {
                id = this.getRandomNum()
            }
            item.id = id;
            this.products.push(item);
        },
        deleteProduct(id) {
            const newProducts = this.products.filter(item => item.id !== id);
            this.products = newProducts;
        },
        getRandomNum() {
            return Math.floor(Math.random() * 100)
        },
        sortProducts(sortFilter) {
            switch(sortFilter) {
                case 'default':
                    return this.products.sort((a, b) => a.id - b.id);
                case 'priceMin':
                    return this.products.sort((a, b) => a.price - b.price);
                case 'priceMax':
                    return this.products.sort((a, b) => b.price - a.price);
                case 'name':
                    return this.products.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            }
        },
        onSelectChange(selectedSortFilter) {
            this.sortFilter = selectedSortFilter;
        }
    },
    computed: {
        sortedProducts() {
            return this.sortProducts(this.sortFilter)
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap');
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    color: #3F3F3F;
}

html {
    font-size: 20px;
    @media screen and (max-width: 430px){
        font-size: 35px;
    }

    body {
        background-color: #E5E5E5;;
    }
}

.home {
    display: grid;
    grid-template-columns: 28vw 1fr;

    @media screen and (max-width: 430px){
        grid-template-columns: 1fr;
    }
}

</style>
