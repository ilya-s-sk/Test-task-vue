<template>
    <div class="goods-card">
        <h2 class="card__title">{{item.title}}</h2>
        <a href="#"
            @click.prevent="$emit('openItem', item)">
            <img :src='item.image' alt="" width="85">
        </a>

        <p v-if="item.author" class="card__text-italic">by {{item.author}}</p>
        <p v-if="item.year">year: <span class="card__text-italic">{{item.year}}</span></p>

        <p>{{item.description}}</p>
        <p v-if="item.type"><b>Type</b>: {{item.type}}</p>
        <p v-if="item.genre"><b>Genre</b>: {{item.genre}}</p>
        <p><b>Price</b>: {{item.price}}</p>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style>

.card__title{
    font-size: 20px;
    margin-bottom: 10px;
}
.card__text-italic {
    font-style: italic;
}

.category-title {
    text-align: center;
    margin-bottom: 20px;
}
.goods-container{
    display: flex;
    justify-content: space-around;
}
.goods-card{
    width: 270px;
    background-color: rgb(230,230,230);
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
}
</style>