<script lang="ts">

    const {data} = $props();
    const user = data.user;

</script>

<p>User: {JSON.stringify(user)}</p>
<a href="http://localhost:8080/logout">Log Out</a>