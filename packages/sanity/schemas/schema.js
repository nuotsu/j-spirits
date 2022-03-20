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
import { internalLink, externalLink } from './objects/link'
import heading from './objects/heading'
import cta from './objects/cta'

// blocks
import contactForm from './blocks/contactForm'
import contentBox from './blocks/contentBox'
import { faq, faqList } from './blocks/faq'
import gameList from './blocks/gameList'
import gameListCompact from './blocks/gameListCompact'
import heroHome from './blocks/heroHome'
import newsList from './blocks/newsList'
import roster from './blocks/roster'
import upcomingGameList from './blocks/upcomingGameList'
import assetList from './blocks/assetList'

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
    internalLink, externalLink,
    heading,
    cta,

    // blocks
    assetList,
    contactForm,
    contentBox,
    faqList, faq,
    gameList,
    gameListCompact,
    heroHome,
    newsList,
    roster,
    upcomingGameList,
  ]),
})
