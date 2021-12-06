<template>
    <div class="info">
        <div class="info__header">
            <span>Business Analytics</span> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
        </div>
        <Benefit
            title="Interactive Reporting"
            text="In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities."
        />
        <Benefit
            title="Automated data updates"
            text="The application automatically updates and structures the data in just 60 seconds, saving you time and money."
        />
        <Benefit
            title="Data Security"
            text="The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality."
        />
    </div>
</template>

<script>
import Benefit from "./Benefit";
export default {
    name: "MainInfo",
    components:{
        Benefit
    }
}
</script>

<style scoped>

</style>
