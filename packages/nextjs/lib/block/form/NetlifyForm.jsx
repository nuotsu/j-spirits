const Form = ({ name, className, children, ...props }) => (
	<form
		name={name}
		className={className}
		method="post"
		data-netlify="true"
		netlify-honeypot="bot-field"
		{...props}
	>
		<input type="hidden" name="form-name" value={name} />
		<input type="hidden" name="bot-field" />

		{children}
	</form>
)

export default Form
