<template>
    <div class="add-product">
        <h2 class="add-product__title">Добавление товара</h2>
        <form class="add-product__form" @submit.prevent="onSubmit">
            <label for="name" class="required">Наименование товара</label>
            <input type="text" id="name" 
                   class="add-product__form__input"
                   @focus="removeErrorStatus" @blur="checkInput" 
                   placeholder="Введите наименование товара"
                   v-model="name">
            <p class="required-text">Поле является обязательным</p>

            <label for="description">Описание товара</label>
            <textarea type="text" id="description" 
                      class="add-product__form__input" 
                      placeholder="Введите описание товара" 
                      v-model="description"></textarea>

            <label for="image-link" class="required">Ссылка на изображение товара</label>
            <input type="text" id="image-link" 
                    class="add-product__form__input"
                    @focus="removeErrorStatus" @blur="checkInput"
                    placeholder="Введите ссылку"
                    v-model="imageUrl">
            <p class="required-text">Поле является обязательным</p>

            <label for="price" class="required">Цена товара</label>
            <input type="text" id="price" 
                    class="add-product__form__input"
                    @focus="removeErrorStatus" @blur="checkInput" 
                    placeholder="Введите цену"
                    v-model="price">
            <p class="required-text">Поле является обязательным</p>

            <button type="submit" 
                    class="add-product__form__submit"
                    :class="{active: isReadyToSubmit}">Добавить товар</button>
        </form> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            imageUrl: '',
            price: ''
        }
    },
    methods: {
        onSubmit() {
            if (!(this.name && this.imageUrl && this.price)) {
                return
            }
            const product = {
                name: this.name,
                description: this.description,
                imageUrl: this.imageUrl,
                price: this.price
            }
            this.$emit('addProduct', product);
            this.name = '', this.description = '', this.imageUrl = '', this.price = ''
        },
        removeErrorStatus(event) {
            if (event.target.classList.contains('error')) {
                event.target.classList.remove('error')
                event.target.nextElementSibling.classList.remove('visible');
            }
        },
        checkInput(event) {
            if (!event.target.value) {
                event.target.classList.add('error');
                event.target.nextElementSibling.classList.add('visible');
            }
        }
    },
    computed: {
        isReadyToSubmit() {
            return this.name && this.imageUrl && this.price ? true : false
        }
    },
    watch: {
        price() {
            if ((/\D/g).test(this.price)) {
                this.price = this.price.split('').slice(0, this.price.length - 1).join('')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$mainFontSize: .9rem;

.add-product {
    margin: 32px ;

    &__title {
        font-family: Source Sans Pro;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 16px;
    }

    &__form {
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        padding: 24px;

        label {
            display: block;
            color: #49485E;
            margin-bottom: 10px;
            line-height: 13px;
            font-size: .75rem;
        }

        .required {
            &-text {
                color: #FF8484;
                font-size: .6rem;
                margin-bottom: 10px;
                opacity: 0;
                transition: opacity .3s;
            }
            &::after {
                content: "";
                display: inline-block;
                width: 6px;
                height: 6px;
                background: #FF8484;
                border-radius: 4px;
                position: relative;
                left: 2px;
                bottom: 5px;
            }
        }
            
        &__input {
            width: 100%;
            border: 2px solid transparent;
            outline: none;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            margin-bottom: 6px;
            padding: 13px 16px;
            transition: all .3s;
            font-size: $mainFontSize;

            &:focus {
                box-shadow: 0px 0px 25px -2px rgba(51, 102, 255, 0.4);
                border: 2px solid transparent;
            }  
        }

        #description {
            resize: none;
            height: 108px;
            font-size: $mainFontSize;
            margin-bottom: 16px;
        }

        &__submit {
            width: 100%;
            padding: 10px;
            text-align: center;
            border: none;
            font-size: $mainFontSize;

            color: #B4B4B4;
            background: #EEEEEE;
            border-radius: 10px;

            transition: all .2s;
        }
        .active {
            background-color: #7BAE73;
            color: #fff;
            cursor: pointer;
        }
        .error {
            border: 2px solid #FF8484;
        }
        .visible {
            opacity: 1;
        }
    }
}
</style>