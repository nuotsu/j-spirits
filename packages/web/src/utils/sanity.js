import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { dev } from '$app/env'

const config = {
	projectId: 'qfur5xy2',
	dataset: 'production',
	apiVersion: '2022-03-01',
	useCdn: !dev,
	token: dev && import.meta.env.VITE_SANITY_TOKEN,
}

const client = sanityClient(config)

export default client

export const urlFor = source => imageUrlBuilder(client).image(source)
