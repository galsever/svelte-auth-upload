<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
    import Navbar from "$lib/components/navbar.svelte";
    import { ModeWatcher } from "mode-watcher";

    let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Navbar />

{@render children()}
