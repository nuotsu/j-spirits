import css from './AssetList.module.css'
import HTag from 'lib/HTag'
import PT from 'lib/pt/PT'
import Img from 'lib/img/SanityImage'
import t from 'utils/locales'
import newtab from 'utils/newtab'
import { IoMdDownload } from 'react-icons/io'
import { urlFor } from 'utils/sanity'

const AssetList = ({ heading, richtext, assets }) => (
	<section className="section-xl">
		<HTag className="h2" {...heading} />
		<PT value={richtext} />

		<div className={css.list}>
			{assets?.map(({ asset, title }, key) => (
				<figure className={`${css.asset} j-gradient`} key={key}>
					<a
						className={css.img}
						href={urlFor(asset).url()}
						download
						{...newtab()}
						title={t({ en: 'Download', ja: 'ダウンロード' })}
					>
						<Img
							image={asset}
							builder={b => b.height(50)}
							alt={t(title)}
						/>

						<span className={css.download}>
							<IoMdDownload />
						</span>
					</a>

					<figcaption className={css.caption}>
						{t(title)}
					</figcaption>
				</figure>
			))}
		</div>
	</section>
)

export default AssetList
