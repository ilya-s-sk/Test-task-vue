<template>
    <nav class="nav">
        <nuxt-link exact active-class="active" class="nav__home-link link" to="/">
                       Catalog
        </nuxt-link>
        <div>
            <ul class="nav__list">
                <li class="nav__list-item">
                    <nuxt-link active-class="active" class="nav__list-item-link link" to="/books">
                        Books
                    </nuxt-link>
                    <ul class="nav__subcat-list">
                        <li>
                            <nuxt-link active-class="active" class="nav__list-item-link link" to="/books/classic">
                                — Classic
                            </nuxt-link>
                        </li>
                        
                        <li>
                            <nuxt-link active-class="active" class="nav__list-item-link link" to="/books/adventure">
                                — Adventure
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="nav__list-item">
                    <nuxt-link active-class="active" class="nav__list-item-link link" to="/phones">
                        Phones
                    </nuxt-link>
                    <ul class="nav__subcat-list">
                        <li>
                            <nuxt-link active-class="active" class="nav__list-item-link link" to="/phones/android">
                                — Android
                            </nuxt-link>
                        </li>
                        
                        <li>
                            <nuxt-link active-class="active" class="nav__list-item-link link" to="/phones/iphone">
                                — Iphones
                            </nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>


<style>
ul {
    list-style: none;
}
.link{
    text-decoration: none;
    color: black;
}
.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: rgb(230,230,230);
    margin-bottom: 30px;

}
.nav__home-link {
    font-size: 30px;
}

.nav__list {
    display: flex;
    font-size: 25px;
}
.nav__list-item {
    margin-right: 30px;
}
.nav__subcat-list{
    font-size: .75em;
}
.nav__list-item-link{
    text-decoration: none;
    color: rgba(23,23,23,.6)
}
.active{
    color: rgb(23,23,23);
}
</style>