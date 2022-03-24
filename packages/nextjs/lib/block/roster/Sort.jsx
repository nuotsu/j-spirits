import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

const Sort = ({ by, state,  children }) => {
	const [$sort, set$sort] = state

	return (
		<button
			className="flex gap-[0.5ch] items-center justify-center w-full font-bold"
			onClick={() => set$sort(by)}
		>
			{children}

			{$sort === by
				? <BiChevronUp className="text-j-green-light" />
				: <BiChevronDown className="opacity-10" />
			}


		</button>
	)
}

export default Sort
