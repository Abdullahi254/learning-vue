<template>
    <div class="container">
        <form>
            <div class="form-group mb-3 mt-3">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" v-model="emailData">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group mb-3">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    v-model="passData">
            </div>
            <div class="form-check mb-2">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary"
                @click.prevent="() => handleSubmit(emailData, passData)">Submit</button>
        </form>
    </div>

</template>

<script>
export default {
    props: ["handleSubmit"],
    data() {
        return {
            emailData: '',
            passData: ''
        }
    }
}
</script>