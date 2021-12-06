<template>
    <div class="benefit" title="title">
        <img src="../img/tick.png" alt="1">
        <div class="benefits__cont">
            <h2>{{title}}</h2>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        text:String
    }
}
</script>

<style scoped>

</style>
