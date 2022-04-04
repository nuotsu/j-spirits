import css from './HeroHome.module.css'
import HTag from 'lib/HTag'
import Img from 'lib/img/SanityImage'
import Link from 'next/link'

const HeroHome = ({ heading, image, imageLink }) => (
	<section className="max-w-screen-xl mx-auto pt-4 px-4 text-center">
		<div className={`${css.inner} gradient-green`}>
			<HTag className={css.heading} {...heading} />
		</div>

		<figure className="px-4">
			{console.debug(imageLink.internalUrl)}

			<Link href={imageLink.internalUrl}>
				<a className="inline-block">
					<Img className={css.img} image={image} />
				</a>
			</Link>
		</figure>
	</section>

)

export default HeroHome
