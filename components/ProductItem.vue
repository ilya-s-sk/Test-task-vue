<template>
    <div class="product-item">
        <img :src="item.imageUrl" :alt="item.name" class="product-item__image">
        <div class="product-item__text">
            <h3 class="product-item__text__name">
                {{item.name}}
            </h3>
            <p class="product-item__text__description">
                {{item.description}}
            </p>
            <p class="product-item__text__price">
                {{separateNum}} руб
            </p>
        </div>
        <button class="product-item__delete" 
                @click="$emit('deleteProduct', item.id)">
            <img src="delete.svg" alt="" width="15px">
        </button>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    computed: {
        separateNum() {
            if (this.item.price > 1000) {
                const arr = this.item.price.split('');
                return `${arr.slice(0, arr.length - 3).join('')} ${arr.slice(arr.length - 3).join('')}`
            } else {
                return this.item.price
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.product-item{
    width: 332px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    margin-bottom: 16px;
    position: relative;

    &__image {
        width: 332px;
        height: 200px;
    }
    
    &__text {
        padding: 16px;

        &__name {
            margin-bottom: 16px;
        }

        &__description {
            font-size: .8rem;
            margin-bottom: 32px;
        }

        &__price {
            font-weight: 600;
            font-size: 1.2rem;
            margin-bottom: 8px;
        }
    }

    &__delete {
        
        width: 32px;
        height: 32px;
        background: #FF8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        border: none;
        padding: 8px;
        cursor: pointer;

        position: absolute;
        top: -10px;
        right: -10px;
        display: none;
        transition: all .5s ease;
        z-index: 1;

        &:hover {
            transform: scale(1.4)
        }
    }

    &:hover &__delete {
        display: block;
    }
}
</style>