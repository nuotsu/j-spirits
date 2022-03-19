const Form = ({ name, className, children }) => (
	<form
		name={name}
		className={className}
		data-netlify="true"
		netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value={name} hidden />
		<input type="hidden" name="bot-field" hidden />

		{children}
	</form>
)

export default Form
