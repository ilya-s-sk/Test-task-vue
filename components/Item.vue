<template>
    <div class="item-common-container">
        <h2 class="item-title">{{item.title}}</h2>
        <div class="item-container">
            <img :src='item.image' alt="" width="220">
            <div class="item__info-container">
                
                <p v-if="item.author">by <span class="card__text-italic">{{item.author}}</span></p>
                <p v-if="item.year">year: <span class="card__text-italic">{{item.year}}</span></p>
                <p>{{item.description}}</p>
                <p v-if="item.author"><b>Genre</b>: {{item.genre}}</p>
                <p v-if="item.type"><b>Type</b>: {{item.type}}</p>
                <p ><b>Price</b>: {{item.price}}</p>
            </div>
        </div>
        
        
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
.item-common-container {
    width: 600px;
    margin: 0 auto;
    background-color:dodgerblue;
    border-radius: 20px;
    padding: 20px;
    color: white
}
.item-title {
    font-size: 35px;
    text-align: center;
    margin-bottom: 20px;
}
.item-container {
    display: flex;
    justify-content: space-between;
}
.item__info-container {
    font-size: 22px;
    padding: 20px;
    text-align: center;
}
</style>