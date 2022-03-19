import React from 'react'
import t from 'utils/locales'

const HTag = ({ tag = 'h2', text, _type, ...props }) => React.createElement(
	tag,
	props,
	t(text)
)

export default HTag
