import HTag from 'lib/HTag'
import PT from 'lib/pt/PT'
import CTA from 'lib/CTA'

const ContentBox = ({ heading, richtext, cta }) => (
	<section className="section-md prose-spacing">
		<HTag className="h1" {...heading} />
		<PT value={richtext} />
		<CTA {...cta} />
	</section>
)

export default ContentBox
