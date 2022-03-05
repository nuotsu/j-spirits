<form {name} {...$$props} data-netlify="true" netlify-honeypot="bot-field">
	<input type="hidden" name="form-name" value="contact" hidden>
	<input type="hidden" name="bot-field" hidden>

	<slot></slot>
</form>

<script>
	export let name
</script>
