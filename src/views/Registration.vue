<template>
    <div>
        <AppHeader/>
        <AppWelcome/>
        <AppMain/>
        <AppFooter/>
    </div>
</template>

<script>

import AppFooter from "../components/AppFooter";
import AppWelcome from "../components/AppWelcome";
import AppMain from "../components/AppMain";
import AppHeader from "../components/AppHeader";
export default {
    components: {
        AppHeader,
        AppMain,
        AppWelcome,
        AppFooter
    }
}
</script>

<style scoped>
body{
    background: rgba(51, 51, 51, 1);
}
.container{
    max-width: 1190px;
    margin: 0 auto;
}
header {
    margin-top: 53px;
    height: 96px;
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
    padding: 15px 0 0 0;
}
.logo{
    margin-left: 0;
}
.logo img{
    width: 103px;
    height: 66px;
}

.welcome{
    position: relative;
    background: url("../img/Фон.jpg");
    height: 457px;
}
.welcome .cont h1{
    font-size: 55px;
    line-height: 156.69%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
}

.welcome .cont{
    color: white;
    position: absolute;
    top: 215px;

}
main{
    min-height: 452px;
    background: #E5E5E5;
    position: relative;
}
main .info{
    padding:40px 23px  ;
}
main .content__row{
    display: flex;
    flex-wrap: wrap;
}
main .info{
    max-width: 664px;
    flex: 1 1 60%;
}
main .info__header span{
    font-weight:bold ;
}
main info__header {
    font-family: Roboto;
    font-size: 16px;
    line-height: 156.69%;
    padding: 0 50px 0 0;
}
main .benefit h2 {
    font-family: Roboto;
    font-weight: bold;
    font-size: 16px;
    line-height: 156.69%;
}
main .benefit{
    display: flex;
    margin-top: 15px;
}
main .benefit img{
    width: 23px;
    height: 17px;
    margin-right: 15px;
}
main .benefits__cont h2{
    margin: 0;
}
main .benefits__cont p{
    margin: 10px 0;
}

main .control_form{
    height: 470px;
    flex: 1 1 30%;
    margin-top: -190px;
}
main .control_form form{
    background: #FFFFFF;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    padding: 1px 30px;
}
main .form-input{
    margin-top: 40px;
}
main .control_form input{
    width: 100%;
    height: 50px;
    margin: 7px 0 0 0;
}
main .form-input{
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

}
main .control_form .login{
    width: 100%;
    height: 53px;
    background: #0076C0;
    margin-top: 52px;
    font-size: 25px;
    line-height: 29px;
    color: #FFFFFF;
}
main .control_form .register{
    width: 100%;
    height: 63px;
    background: #F6F6F6;
    font-size: 25px;
    line-height: 29px;
    color: #333333;
    border:none;
}
main .control_form .forgot {
    font-size: 20px;
    line-height: 23px;
    text-decoration: none;
    margin: 20px 0;
    text-align: center;
}
main .control_form .forgot a{
    text-decoration:none;
}
@media (max-width: 992px) {
    main .control_form{
        height: 470px;
        flex: 1 1 500%;
        margin-top: 0;
    }
    .welcome .cont h1{
        font-size: 35px;

    }

}
footer .contacts__row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
footer .contacts{
    margin-top: 30px;
}

footer  li{
    display: inline-block;
    font-size: 16px;
    line-height: 156.69%;
    color: #FFFFFF;
    margin-left: 20px;
}
footer .contacts_logo img{
    width: 55px;
    height: 35px;
}
footer hr {
    margin: 30px 0;
}
footer .info p{
    font-size: 12px;
    line-height: 156.69%;
    color: #FFFFFF;

}

</style>
