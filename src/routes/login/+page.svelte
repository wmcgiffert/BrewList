<script lang="ts">
    import { signInWithGoogle } from "./../../lib/helplers/auth";
</script>

<h2>Login</h2>
<button class="btn btn-primary" on:click={signInWithGoogle}
    >Sign in with Google</button
>
