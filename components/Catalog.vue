<template>
    <div class="catalog">
        <div class="catalog__header">
            <select name="sortFilter" id="sortFilter" 
                    @change="$emit('onSelectChange', selectedSortFilter)" 
                    v-model="selectedSortFilter">
                <option value="default">По умолчанию</option>
                <option value="priceMin">По цене min</option>
                <option value="priceMax">По цене max</option>
                <option value="name">По наименованию</option>
            </select>
        </div>
        <transition-group name="list" tag="div" class="catalog__container">
            <ProductItem 
            v-for="item of products" :key="item.id"
            :item="item"
            @deleteProduct="deleteProduct"
            class="list-item"/>
        </transition-group>
        
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array
        },
        deleteProduct: Function
    },
    data() {
        return {
            selectedSortFilter: 'default'
        }
    }
}
</script>

<style lang="scss" scoped>
.catalog {
    padding: 30px;

    &__header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 16px;

        select {
            width: 200px;
            font-size: .7rem;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            border: none;
            padding: 10px 16px;
            transition: all .5s; 

            &:hover {
                box-shadow: 0px 0px 25px -2px rgba(51, 102, 255, 0.4);
            }
            &:focus {
                outline: none;
            }
        }
    }

    &__container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 1s;
}
</style>