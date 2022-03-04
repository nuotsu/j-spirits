import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import header from './documents/header'
import footer from './documents/footer'
import page from './documents/page'
import player from './documents/player'

// objects
import { localeString } from './objects/locales'
import { internalLink, externalLink } from './objects/links'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    header,
    footer,
    page,
    player,

    // objects
    localeString,
    internalLink, externalLink,
  ]),
})
