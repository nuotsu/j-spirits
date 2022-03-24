import HTag from 'lib/HTag'
import Img from 'lib/img/SanityImage'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Gallery = ({ heading, images }) => (
	<section className="section-xl text-center">
		<HTag className="h2" {...heading} />

		<div className="gradient-green-dark full-width">
			<Swiper
				style={{
					'--swiper-theme-color': 'currentColor',
					'--swiper-navigation-size': '2rem',
					'--swiper-pagination-bullet-inactive-color': '#fff',
				}}
				effect="coverflow"
				navigation
				pagination={{ clickable: true }}
				grabCursor
				centeredSlides
				slidesPerView={1.5}
				coverflowEffect={{ slideShadows: false }}
				breakpoints={{
					768: { slidesPerView: 3 }
				}}
				modules={[Navigation, Pagination, EffectCoverflow]}
			>
				{images?.map((image, key) => (
					<SwiperSlide className="py-8" key={key}>
						<Img
							className="h-[400px] object-contain drop-shadow-xl"
							image={image}
							builder={b => b.height(600)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	</section>
)

export default Gallery
