<template>
    <div >
        <div class="header__todo">
            <div class="logo">
                <img src="../img/logo.png" alt="">
            </div>
        </div>
        <div class="main__todo">
            <div class="container">
                <div class="title">
                    <h1>Thank you {{$store.getters.name}}!</h1>
                </div>

                <todo-app></todo-app>
            </div>
        </div>
    </div>
</template>

<script>
import TodoApp from "../components/TodoApp";
export default {
    components: {TodoApp}
}
</script>

<style scoped>
body{
    background: white;
}
.logo {
    display: flex;
    justify-content: center;
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
    height: 797px;
    padding-top: 65px;
}
.main__todo{
    max-width: 1191px;
    min-height: 660px;
    background: #FFFFFF;
    margin: 0 auto;
    margin-top: -700px;
    text-align: center;
}
.main__todo h1{
    font-size: 60px;
    line-height: 156.69%;
    margin-top: 30px;
}
.title{
    padding-top: 30px;
}
.logo{
    margin-bottom: 100px;
}
</style>
