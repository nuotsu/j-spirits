import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import site from './documents/site'
import header from './documents/header'
import footer from './documents/footer'
import page from './documents/page'
import news from './documents/news'
import game from './documents/game'
import player from './documents/player'
import team from './documents/team'

// objects
import { localeHeading, localeString } from './objects/locales'
import { internalLink, externalLink } from './objects/link'

// blocks
import heroHome from './blocks/heroHome'
import newsList from './blocks/newsList'
import roster from './blocks/roster'
import contactForm from './blocks/contactForm'
import gameList from './blocks/gameList'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    site,
    header,
    footer,
    page,
    news,
    game,
    player,
    team,

    // objects
    localeString, localeHeading,
    internalLink, externalLink,

    // blocks
    heroHome,
    newsList,
    gameList,
    roster,
    contactForm,
  ]),
})
