import React from 'react'
import t from 'utils/locale'

const HTag = ({ tag = 'h2', text, _type, ...props }) => React.createElement(
	tag,
	props,
	t(text)
)

export default HTag
