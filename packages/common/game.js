export const total = ({ rows }, index = 0) => rows[index]?.cells?.reduce(
	(acc, curr) => parseInt(Number(acc) + (Number(curr) || 0)),
	0
)
