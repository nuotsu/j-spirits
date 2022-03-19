import HTag from 'lib/HTag'
import PT from 'lib/PT'

const ContentBox = ({ heading, richtext, cta }) => (
	<section className="section-md !p-8 ground-gradient">
		<HTag className="h2" {...heading} />
		<PT value={richtext} />
	</section>
)

export default ContentBox
