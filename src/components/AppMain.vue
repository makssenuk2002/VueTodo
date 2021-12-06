<template>
    <main>
        <div class="container">
            <div class="content__row">
                <MainInfo/>
                <AppForm/>
            </div>
        </div>
    </main>
</template>

<script>
import MainInfo from "../components/MainInfo";
import AppForm from "../components/AppForm";
export default {
    name: "AppMain",
    components:{
        MainInfo,
        AppForm
    }
}
</script>

<style scoped>

</style>
