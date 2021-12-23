<script lang="ts">
	import { Router, Route, Link } from "svelte-routing"

	// Pages
	import Payment from "./pages/Payment.svelte"
	import Success from "./pages/Success.svelte"

	export let url: string;
</script>

<main>
	<Router basepath="/" url="{url}">
		<div>
			<Route path="/"><Payment /></Route>
			<Route path="/success"><Success /></Route>
		</div>
	</Router>
</main>

<style>

</style>