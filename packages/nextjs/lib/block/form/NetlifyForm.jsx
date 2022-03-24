const Form = ({ name, className, children, ...props }) => (
	<form
		name={name}
		className={className}
		{...props}
		data-netlify="true" data-netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value={name} hidden />
		<input type="hidden" name="bot-field" hidden />

		{children}
	</form>
)

export default Form
