import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import header from './documents/header'
import footer from './documents/footer'
import page from './documents/page'
import game from './documents/game'
import news from './documents/news'
import player from './documents/player'
import team from './documents/team'

// objects
import { localeString } from './objects/locales'
import { internalLink, externalLink } from './objects/link'

// blocks
import heroHome from './blocks/heroHome'
import newsList from './blocks/newsList'
import roster from './blocks/roster'
import contactForm from './blocks/contactForm'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    site,
    header,
    footer,
    page,
    game,
    news,
    player,
    team,

    // objects
    localeString,
    internalLink, externalLink,

    // blocks
    heroHome,
    newsList,
    roster,
    contactForm,
  ]),
})
