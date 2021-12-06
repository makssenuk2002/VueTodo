<template>
    <div class="control_form">
        <form @submit.prevent="submitHandler">
            <div class="form-input">
                <label for="name">Name</label>
                <input
                    id="name"
                    type="text"
                    v-model.trim="name"
                    :class="{invalid : $v.name.$dirty && !$v.name.required }"
                >
                <small v-if="$v.name.$dirty && !$v.name.required ">Enter сompany name</small>
            </div>
            <div class="form-input">
                <label for="password">Password</label>
                <input
                    :class="{invalid : ($v.password.$dirty && !$v.password.required)  || ($v.password.$dirty && !$v.password.minLength) }"
                    v-model.trim="password"
                    type="password"
                    id="password">
                <small v-if="$v.password.$dirty && !$v.password.required ">Enter password</small>
                <small v-if="$v.password.$dirty && !$v.password.minLength ">password length must be 5 characters</small>
            </div>
            <button class="btn login">LOGIN</button>
            <div class="forgot">
                <a href="">Forgot Password</a>
            </div>
        </form>
        <button type="submit" class="btn register ">Register now</button>

    </div>
</template>

<script>

import { required,minLength} from 'vuelidate/lib/validators'
import firebase from "firebase/app";
import 'firebase/auth';
export default {
    data: () => ({
        name: '',
        password: ''
    }),
    validations: {
        name: {required},
        password: {required, minLength: minLength(5)}
    },
    mounted() {
        localStorage.name = "admin"
        localStorage.password = "12345"
    },
    methods: {
        submitHandler() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            if(this.name === localStorage.name && this.password === localStorage.password){
                this.$router.push('/main');
            }else {
                alert('wrong password or login')
            }
        }
    }
}

</script>

<style scoped>

small{
    color:red;
}
small::before {
    content: "✖";
    color: red;
    font-size: 15px;
    padding:0 10px 0 0;
}
</style>
