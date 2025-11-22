<script lang="ts">

    import {createPost} from "$lib/api/routes.ts";

    const { data } = $props()
    const user = data.user

    let files: FileList | undefined = $state();
</script>

<p>User: {JSON.stringify(user)}</p>
<input accept="image/png, image/jpeg" bind:files type="file" />

<button onclick={async () => {

    const file = files?.[0]
    if (!file) return

    const postCreateResponse = await createPost({
        content: "Test Post",
        uploadRequest: {
            contentType: file.type,
            size: file.size
        }
    })
    if (!postCreateResponse) return
    console.log(postCreateResponse)

    const res = await fetch(postCreateResponse.url, {
        method: "PUT",
        headers: {
            "Content-Type": file.type,
        },
        credentials: "omit",
        body: file
    })
    console.log(res)

}} class="p-3 bg-amber-500 rounded-lg">Create Test Post</button>