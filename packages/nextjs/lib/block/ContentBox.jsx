import HTag from 'lib/HTag'
import PT from 'lib/pt/PT'
import CTA from 'lib/CTA'

const ContentBox = ({ heading, richtext, cta }) => (
	<section className="section-md !p-8 ground-gradient prose-spacing">
		<HTag className="h2" {...heading} />
		<PT value={richtext} />
		<CTA {...cta} />
	</section>
)

export default ContentBox
