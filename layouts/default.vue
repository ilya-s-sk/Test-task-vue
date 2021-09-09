<template>
    <div>
        <CategoriesList/>
        <main>
            <div class="container">
                <nuxt />
            </div>
        </main>
        
    </div>
</template>

<script>
import CategoriesList from '@/components/CategoriesList'
export default {
    components: {
        CategoriesList
    }
}
</script>

<style>

</style>
