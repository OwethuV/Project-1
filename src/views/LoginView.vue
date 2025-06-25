<template>
    <div class="login d-flex justify-content-center align-items-center vh-100">
        <form @submit.prevent="validatePassword">
            <div class="text-center">
                <img class="align-items-center" src="@/assets/IMG-20250623-WA0016.png" width="150" height="150">
            </div>

            <h1 class="mt-3 mb-5"><strong>Welcome Back</strong></h1>
            <label>Email Address:</label>
            <input type="email" v-model="email" placeholder="eg. johndoe@gmail.com" required>

            <label class="mt-3">Password:</label>
            <input type="password" v-model="password" placeholder="Must be 8+ characters" required>

            <div v-if="errorMessage" class="text-danger">{{ errorMessage }}</div>

            <button class="button btn btn-primary mt-3" type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        };
    },
    methods: {
        validatePassword() {
            if (this.password === 'password123') {
                // Clear error message and redirect to management page
                this.errorMessage = '';
                this.$router.push('/management'); // Redirect to management page
            } else {
                this.errorMessage = 'Invalid password. Please try again.';
            }
        }
    }
};
</script>

<style>
* {
    font-family: "Lato", 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #0f5f96;
}

h1 {
    text-align: center;
}

form {
    width: 800px;
    border: 1px solid;
    color: #2199ea;
    border-radius: 10px;
    padding: 10px;
    background-color: #d1d6da;
}

label {
    display: block;
    margin-bottom: 5px;
}

.button {
    display: block;
    width: 96.5%;
    height: 40px;
    letter-spacing: .5px;
    background-color: #2199ea !important;
    border: none;
    align-items: center;
}

input {
    width: 95%;
    margin-bottom: 10px;
    height: 40px;
    color: #0f5f96;
}

.button:hover {
    background-color: #0f5f96 !important;
    color: azure;
}

.login {
    height: 100vh; 
}

.text-white {
    text-decoration: none;
}
</style>