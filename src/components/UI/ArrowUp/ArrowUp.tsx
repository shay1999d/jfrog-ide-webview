import css from './ArrowUp.module.css'

export default function ArrowUp(): JSX.Element {
	return (
		<div className={css.arrowUp}>
			<svg
				width={9}
				height={5}
				viewBox="0 0 9 5"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<rect
					x="8.5072"
					y="4.29291"
					width={1}
					height={6}
					rx="0.5"
					transform="rotate(135 8.5072 4.29291)"
					fill="#AAA"/>
				<rect
					x="0.707031"
					y={5}
					width={1}
					height={6}
					rx="0.5"
					transform="rotate(-135 0.707031 5)"
					fill="#AAA"/>
			</svg>
		</div>
	)
}