type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
	logo: (props: IconProps) => (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' {...props}>
			<rect width='256' height='256' fill='none' />
			<line
				x1='208'
				y1='128'
				x2='128'
				y2='208'
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'
			/>
			<line
				x1='192'
				y1='40'
				x2='40'
				y2='192'
				fill='none'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='16'
			/>
		</svg>
	),
	twitter: (props: IconProps) => (
		<svg
			{...props}
			height='23'
			viewBox='0 0 1200 1227'
			width='23'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z' />
		</svg>
	),
	gitHub: (props: IconProps) => (
		<svg viewBox='0 0 438.549 438.549' {...props}>
			<path
				fill='currentColor'
				d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'
			/>
		</svg>
	),
	radix: (props: IconProps) => (
		<svg viewBox='0 0 25 25' fill='none' {...props}>
			<path
				d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'
				fill='currentcolor'
			/>
			<path d='M12 0H4V8H12V0Z' fill='currentcolor' />
			<path
				d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'
				fill='currentcolor'
			/>
		</svg>
	),
	aria: (props: IconProps) => (
		<svg role='img' viewBox='0 0 24 24' fill='currentColor' {...props}>
			<path d='M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z' />
		</svg>
	),
	npm: (props: IconProps) => (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				d='M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z'
				fill='currentColor'
			/>
		</svg>
	),
	yarn: (props: IconProps) => (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				d='M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z'
				fill='currentColor'
			/>
		</svg>
	),
	pnpm: (props: IconProps) => (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				d='M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z'
				fill='currentColor'
			/>
		</svg>
	),
	react: (props: IconProps) => (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z'
				fill='currentColor'
			/>
		</svg>
	),
	tailwind: (props: IconProps) => (
		<svg viewBox='0 0 24 24' {...props}>
			<path
				d='M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'
				fill='currentColor'
			/>
		</svg>
	),
	google: (props: IconProps) => (
		<svg role='img' viewBox='0 0 24 24' {...props}>
			<path
				fill='currentColor'
				d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
			/>
		</svg>
	),
	apple: (props: IconProps) => (
		<svg role='img' viewBox='0 0 24 24' {...props}>
			<path
				d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'
				fill='currentColor'
			/>
		</svg>
	),
	paypal: (props: IconProps) => (
		<svg role='img' viewBox='0 0 24 24' {...props}>
			<path
				d='M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z'
				fill='currentColor'
			/>
		</svg>
	),
	spinner: (props: IconProps) => (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
			{...props}
		>
			<path d='M21 12a9 9 0 1 1-6.219-8.56' />
		</svg>
	),
	inboxIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
			<path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
		</svg>
	),
	lockIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
			<path d='M7 11V7a5 5 0 0 1 10 0v4' />
		</svg>
	),
	mergeIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='m8 6 4-4 4 4' />
			<path d='M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22' />
			<path d='m20 22-5-5' />
		</svg>
	),
	searchIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='11' cy='11' r='8' />
			<path d='m21 21-4.3-4.3' />
		</svg>
	),
	settingsIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
			<circle cx='12' cy='12' r='3' />
		</svg>
	),
	enterIcon: (props: IconProps) => (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
		>
			<path d='M9 10l-5 5 5 5' />
			<path d='M20 4v7a4 4 0 01-4 4H4' />
		</svg>
	),
}

export function Facebook({
	className,
	fill = '#1977f3',
}: {
	className?: string
	fill?: string
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1365.12'
			height='1365.12'
			viewBox='0 0 14222 14222'
			className={className}
		>
			<circle cx='7111' cy='7112' r='7111' fill={fill} />
			<path
				d='M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z'
				fill='#fff'
			/>
		</svg>
	)
}

export function Github({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='20'
			fill='currentColor'
			viewBox='0 0 24 24'
			className={className}
		>
			<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
		</svg>
	)
}

export function Google({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='24'
			viewBox='0 0 24 24'
			width='24'
			className={className}
		>
			<path
				d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
				fill='#4285F4'
			/>
			<path
				d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
				fill='#34A853'
			/>
			<path
				d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
				fill='#FBBC05'
			/>
			<path
				d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
				fill='#EA4335'
			/>
			<path d='M1 1h22v22H1z' fill='none' />
		</svg>
	)
}

export function LinkedIn({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			className={className}
		>
			<path
				fill='currentColor'
				d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
			/>
		</svg>
	)
}

export function YouTube({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			width='256'
			height='256'
			viewBox='0 0 256 256'
			className={className}
		>
			<defs />
			<g
				style={{
					stroke: 'none',
					strokeWidth: 0,
					strokeDasharray: 'none',
					strokeLinecap: 'butt',
					strokeLinejoin: 'miter',
					strokeMiterlimit: 10,
					fill: 'none',
					fillRule: 'nonzero',
					opacity: 1,
				}}
				transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'
			>
				<path
					d='M 88.119 23.338 c -1.035 -3.872 -4.085 -6.922 -7.957 -7.957 C 73.144 13.5 45 13.5 45 13.5 s -28.144 0 -35.162 1.881 c -3.872 1.035 -6.922 4.085 -7.957 7.957 C 0 30.356 0 45 0 45 s 0 14.644 1.881 21.662 c 1.035 3.872 4.085 6.922 7.957 7.957 C 16.856 76.5 45 76.5 45 76.5 s 28.144 0 35.162 -1.881 c 3.872 -1.035 6.922 -4.085 7.957 -7.957 C 90 59.644 90 45 90 45 S 90 30.356 88.119 23.338 z M 36 58.5 v -27 L 59.382 45 L 36 58.5 z'
					style={{
						stroke: 'none',
						strokeWidth: 1,
						strokeDasharray: 'none',
						strokeLinecap: 'butt',
						strokeLinejoin: 'miter',
						strokeMiterlimit: 10,
						fill: 'rgb(0,0,0)',
						fillRule: 'nonzero',
						opacity: 1,
					}}
					transform=' matrix(1 0 0 1 0 0) '
					strokeLinecap='round'
				/>
			</g>
		</svg>
	)
}

export function Twitter({ className }: { className?: string }) {
	return (
		<svg
			width='300'
			height='300'
			viewBox='0 0 300 300'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				stroke='currentColor'
				d='M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66'
			/>
		</svg>
	)
}

export function UFRN({ className }: { className?: string }) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='341'
			height='182'
			viewBox='0 0 340 182'
			className={className}
		>
			<path
				fill='#2691d4'
				d='M120.82 53.97c-.05.08-.19 1.1-.3 2.3l-.21 2.18h-17.1l-.1.72c-.06.4-.79 7.33-1.62 15.38A761 761 0 0199.7 90.6c-1.1 6.02-4.43 10.04-9.77 11.84-1.43.5-1.89.57-4.01.64-2.84.08-4.25-.16-6.19-1.1a10.01 10.01 0 01-4.28-4.33c-.97-2-1.18-3-1.28-5.96-.07-2.45.03-3.7 1.46-17.3.85-8.06 1.58-14.94 1.64-15.3l.08-.63H60.08L58.4 74.47c-1.68 16-1.68 16-1.58 19.38.1 3.8.37 5.42 1.35 8 2.53 6.76 8.12 10.06 19.17 11.34 3 .34 12.72.29 15.56-.09 7.95-1.05 12.97-3.06 16.6-6.64 3.7-3.63 6.2-8.7 7.28-14.86.26-1.47 3.57-32 3.57-32.93 0-.17 4.6-.22 23.3-.22H167l-.1.8-.56 5.37-.48 4.57h-29.51l-.07.37c-.08.4-1.12 10.3-1.12 10.67 0 .15 3.3.2 13.45.2h13.46l-.1.8-.56 5.46-.5 4.65H134l-.1.8c-.06.46-.54 4.88-1.04 9.85-.52 4.96-.97 9.29-1.02 9.58l-.1.56h-8.5c-6.65 0-8.53.05-8.58.2-.03.12-.4 3.63-.84 7.81-.43 4.18-.8 7.79-.86 8.04l-.06.48h46.73l.08-.39c.1-.43 1.62-15.22 1.62-15.68 0-.27.53-.29 8.58-.29h8.59l.07-.39c.05-.2.56-4.94 1.14-10.52.58-5.57 1.05-10.15 1.07-10.15 0-.02 2.09.03 4.6.12 2.54.07 5.9.14 7.5.14l2.9.01.93.67a5.94 5.94 0 012.12 2.57c.5.94.5.94.5 4.18 0 1.77-.04 5.5-.1 8.26l-.07 5.02 16.9.06c9.3.02 16.96-.02 17.03-.09.08-.08.98-8.23 2.02-18.11 1.04-9.89 1.9-18 1.94-18.02.02-.01 4.66 8.13 10.3 18.1l10.25 18.15h23.22l.1-.56c.12-.73 5.53-52.52 5.53-52.95 0-.34-.14-.34-7.99-.34h-8l-.07.38c-.04.22-.89 8.12-1.87 17.58-1 9.46-1.82 17.23-1.84 17.27-.04.03-4.42-7.88-9.74-17.59l-9.67-17.64h-12.28c-9.72 0-12.3.05-12.3.2 0 .36-5.09 48.95-5.16 49.14-.01.08-.1-2.87-.17-6.56-.07-3.7-.2-7.3-.29-8-.37-2.7-1.37-4.33-3.31-5.33-1.35-.7-4.03-1.6-5.3-1.78-.67-.08-.89-.18-.89-.39 0-.2.4-.42 1.5-.76 5.25-1.7 9.3-5 10.86-8.85 1.27-3.15 1.17-7.24-.24-9.88-1.87-3.46-7.14-6.51-13.04-7.53-1.3-.23-4.25-.26-20.55-.26h-19.04l.1-1.07c.07-.58.17-1.62.22-2.3l.12-1.23h-23.3c-12.82 0-23.35.05-23.38.12zm76.9 14.9c1.45.56 3.34 1.78 3.98 2.63.77 1.01 1 1.74.9 3.05-.2 3.1-2.42 5.44-6.17 6.5-.84.24-2.12.3-7.83.36l-6.82.08.4-3.71.67-6.6.3-2.86 6.64.05 6.64.05zM120.5 117.2c-.05.46-.09.48-1.26.53l-1.22.05-.11.8c-.07.45-.15.94-.2 1.1-.09.27.05.3 1.12.3 1.15 0 1.2.02 1.15.37-.05.36-.16.4-1.23.48l-1.2.09-.18 1.02c-.12.56-.26 1.31-.3 1.65-.1.55-.2.65-.53.65-.24 0-.43-.05-.43-.14l.6-3.61c.32-1.93.6-3.54.6-3.63 0-.06.72-.12 1.62-.12h1.62zm5.8-.22c0 .68-.18.78-1.35.78h-1.16l-.1.64-.2 1.1-.1.48h1.2c1.2 0 1.31.05 1.1.58-.08.2-.35.27-1.18.27-1.24 0-1.28.06-1.5 1.57l-.12.82h1.21c1.05 0 1.2.03 1.12.27-.05.15-.1.38-.1.51 0 .19-.34.24-1.62.24-1.05 0-1.6-.07-1.6-.19 0-.2.94-6.03 1.11-6.85l.1-.46h1.6c1.26 0 1.6.06 1.6.24zm5.77.1c1.07.53 1.47 1.37 1.45 2.98 0 1.57-.34 2.43-1.33 3.3-.74.66-1.55.88-3.1.88-1.15 0-1.25-.03-1.25-.36 0-.35.98-6.56 1.1-6.93.12-.36 2.37-.28 3.13.13zm7.64.12c-.05.46-.09.48-1.26.53l-1.23.05-.1.8c-.07.45-.15.94-.2 1.1-.09.27.05.3 1.12.3 1.16 0 1.2.02 1.16.37-.06.36-.17.4-1.23.48-1.3.1-1.27.06-1.53 1.66l-.1.73h1.2c1.18 0 1.21.02 1.11.37-.05.22-.1.45-.1.51 0 .09-.73.14-1.62.14-.88 0-1.61-.05-1.61-.14l.6-3.61c.32-1.93.6-3.54.6-3.63 0-.06.72-.12 1.62-.12h1.62zm5.57-.19c1.58.75 1.43 3.36-.22 4.11-.36.17-.68.3-.71.34-.04.02.22.63.56 1.35.34.72.61 1.33.61 1.38 0 .03-.2.05-.46.02-.39-.06-.58-.28-1.26-1.67a12.7 12.7 0 01-.81-1.84c-.02-.14.24-.21.73-.21 1.02 0 1.65-.53 1.68-1.4.02-.92-.4-1.33-1.41-1.33-.95 0-.8-.35-1.46 3.62-.44 2.76-.48 2.86-.87 2.86-.24 0-.39-.1-.39-.27 0-.28.95-6.16 1.1-6.85.1-.34.2-.38 1.21-.38.68 0 1.35.1 1.7.27zm6.92 3.34c.36 2 .63 3.69.63 3.75 0 .09-.19.14-.4.14-.43 0-.45-.03-.72-1.59l-.1-.62h-2.62l-.51 1.05c-.41.9-.58 1.1-.97 1.13-.56.07-.7.47 1.5-4.21 1.49-3.19 1.54-3.26 2.05-3.26h.53zm4.46-3.23c-.16.71-.94 5.53-.94 5.82 0 .23.19.28 1.02.28 1.05 0 1.17.1.92.75-.09.22-.4.27-1.58.27h-1.5l.58-3.54c.32-1.95.61-3.64.64-3.75.06-.1.28-.21.52-.21.35 0 .42.07.34.38zm0 0'
			/>
			<path
				fill='#2691d4'
				d='M129.64 117.94c-.05.22-.27 1.5-.5 2.83l-.4 2.44h.95c1.24 0 2.02-.43 2.55-1.37.73-1.29.46-3.4-.49-3.91-.19-.1-.73-.24-1.2-.3-.77-.08-.82-.06-.9.31zm20.52 1.52l-.7 1.53h1c.9 0 1.03-.03.94-.3-.03-.16-.13-.72-.2-1.23-.2-1.69-.27-1.69-1.04 0zm-65.5-2.42a2.5 2.5 0 00-.61 2.18c.12.48.63 1.02 1.68 1.82.51.38.63.6.63 1.04 0 .65-.44 1.13-1.04 1.13-.56 0-.83-.3-.83-.89 0-.43-.05-.48-.61-.48-.61 0-.61 0-.5.62.26 1.38.85 1.94 2.06 1.94.5 0 .75-.13 1.28-.67.63-.62.76-1.02.68-1.97-.05-.73-.43-1.3-1.23-1.87-1.08-.77-1.32-1.28-.93-1.88.42-.65 1.15-.53 1.37.2.14.48.24.57.65.57.5 0 .51-.02.4-.72-.13-.99-.72-1.5-1.74-1.5-.63 0-.87.1-1.26.48zm86.61-.24c-1.73.8-2.68 3.29-2.05 5.42.82 2.81 4.47 2.95 5.86.22.65-1.23.72-3.27.15-4.33-.55-1.09-1.12-1.43-2.39-1.5a3.66 3.66 0 00-1.57.2zm2.44 1.06c.95.66 1.18 2.6.5 3.98-1.34 2.66-4.51 1.57-4.12-1.43.13-1.1.66-2.07 1.32-2.48.66-.41 1.77-.45 2.3-.07zm15.59-1.07c-1.77.81-2.74 3.5-2.03 5.62.9 2.64 4.5 2.66 5.83.03.65-1.23.72-3.27.16-4.33-.56-1.09-1.13-1.43-2.4-1.5a3.95 3.95 0 00-1.56.18zm2.29 1.05c.7.36 1.02 1.07 1.02 2.25s-.5 2.3-1.24 2.84c-.71.53-2 .5-2.57-.05-.87-.81-.98-2.54-.27-3.93.61-1.21 1.94-1.69 3.06-1.11zm7.68-.92c-2.7 1.35-2.8 6.29-.15 7.3 1.75.66 3.62-.35 4.37-2.33.55-1.46.61-1.41-1.7-1.41h-2.04v1.02h2.9l-.3.53c-.63 1.08-2.02 1.62-2.94 1.14-1.2-.63-1.56-2.55-.8-4.05.9-1.83 3.06-2.08 3.88-.48.24.46.44.65.73.65.56 0 .63-.14.34-.84-.73-1.74-2.54-2.38-4.29-1.53zm45.28-.07c-1.42.74-2 1.8-2.1 3.8-.05 1.28-.01 1.53.34 2.2 1.25 2.33 4.75 1.9 5.84-.72.37-.88.49-2.45.27-3.3a3.36 3.36 0 00-1.57-2.01 4.02 4.02 0 00-2.78.03zm2.61 1.18c.63.52.94 1.55.79 2.6-.3 2.07-1.98 3.28-3.47 2.5-1.31-.69-1.4-3.49-.14-4.83.78-.85 2-.97 2.82-.27zm13.98-1.11c-2.1 1.07-2.77 4.74-1.2 6.54.65.72 1.49 1 2.6.9a3.37 3.37 0 002.6-1.88c.43-.79.49-1.06.49-2.34 0-2.42-.79-3.43-2.72-3.54-.8-.04-1.18.03-1.77.32zm2.51.92c1.65.85 1.23 4.53-.63 5.32-1.18.5-2.36-.05-2.77-1.28-.25-.77-.1-2.29.3-2.99.69-1.15 2.03-1.61 3.1-1.05zM53.8 119.58c-.49 3.05-.45 3.75.24 4.38.84.76 2.66.4 3.18-.62.24-.46 1.26-5.64 1.26-6.4 0-.12-.2-.21-.48-.21h-.49l-.46 2.76c-.46 2.81-.73 3.56-1.36 3.68-.54.12-1.12-.13-1.2-.53-.07-.21.08-1.55.32-2.96.25-1.41.44-2.66.44-2.76 0-.1-.22-.19-.48-.19h-.49zm5.55.6c-.33 1.89-.62 3.57-.67 3.74-.05.24.04.31.45.31.6 0 .54.17 1.07-3.15.2-1.31.42-2.44.47-2.5.07-.08.5 1.15.97 2.72l.85 2.84h1.33l.61-3.71.63-3.7h-.48c-.56 0-.53-.1-1.02 2.9a29.8 29.8 0 01-.47 2.5c-.05.1-.48-1.05-.94-2.6l-.85-2.8h-1.37zm6.45-.09c-.3 1.86-.59 3.54-.64 3.75-.07.34-.02.39.43.39.42 0 .52-.09.6-.48.18-.8 1.13-6.63 1.13-6.83 0-.1-.22-.19-.48-.19h-.49zm2.1-2.99c.05.23.29 1.92.54 3.76l.46 3.37h1.22l1.67-3.63c.9-1.97 1.65-3.66 1.65-3.75 0-.06-.22-.12-.5-.12-.47 0-.54.12-1.81 2.98-1.07 2.37-1.36 2.9-1.47 2.6a34.1 34.1 0 01-.39-2.6c-.37-3.08-.34-2.98-.93-2.98-.44 0-.51.06-.44.38zm6.22-.25c0 .09-.27 1.7-.6 3.63l-.59 3.61c0 .09.75.14 1.68.14h1.69l.08-.46c.05-.27.05-.53 0-.6-.03-.08-.58-.13-1.17-.13h-1.12l.1-.51.2-1.03c.1-.5.1-.5 1.26-.5 1.05 0 1.15-.04 1.26-.4.2-.77.15-.8-1.09-.8-1.16 0-1.2-.02-1.12-.4.05-.2.14-.66.19-1.01l.1-.64h1.15c.92 0 1.2-.06 1.28-.27.27-.7.17-.75-1.6-.75-.93 0-1.7.06-1.7.12zm4.68.25c-.16.7-1.1 6.58-1.1 6.86 0 .18.14.27.46.27h.48l.46-2.95c.61-3.78.53-3.53 1.31-3.53.92 0 1.43.46 1.41 1.28-.03.89-.5 1.31-1.56 1.42-.48.03-.87.12-.87.18s.36.89.8 1.85c.78 1.68.83 1.75 1.38 1.75.29 0 .54-.03.54-.09 0-.05-.27-.62-.6-1.27-.67-1.37-.7-1.54-.27-1.54.46 0 1.2-.66 1.48-1.3.3-.73.3-1.46 0-2.19-.34-.82-1.02-1.11-2.55-1.11-1.19 0-1.3.04-1.37.38zm9.8 3.08c-.3 1.9-.6 3.59-.64 3.74-.07.24.02.31.42.31.4 0 .51-.09.6-.48.17-.8 1.12-6.63 1.12-6.83 0-.1-.22-.19-.47-.19h-.48zm2.8-3.08c-.18.72-1.13 6.58-1.13 6.88 0 .25.19.29 1.77.22 1.6-.06 1.82-.1 2.46-.55 1.96-1.36 2.25-5.18.48-6.47-.39-.3-.8-.38-2-.41-1.47-.07-1.5-.06-1.59.34zm3.12 1.13c.83.85.83 2.78-.02 3.97-.39.57-1.46 1-2.43 1h-.73l.41-2.51c.22-1.39.44-2.61.48-2.73.05-.12.39-.2.93-.2.73 0 .95.08 1.36.47zm3.62.84l-1.75 3.75-.66 1.41h.57c.53 0 .58-.07 1.02-1.1l.48-1.11h1.24c1.38 0 1.23-.16 1.53 1.56.09.58.17.65.6.65.29 0 .49-.09.49-.22 0-.1-.27-1.74-.6-3.62-.32-1.87-.6-3.45-.6-3.52 0-.08-.26-.14-.6-.14h-.6zm1.89 1.1l.12.82h-.85c-.48 0-.87-.06-.87-.15 0-.07.29-.75.63-1.48l.63-1.35.12.68c.05.38.17 1.04.22 1.49zm3.27-3.07c-.18.72-1.13 6.58-1.13 6.88 0 .25.19.29 1.77.22 1.6-.06 1.82-.1 2.46-.55 1.96-1.36 2.25-5.18.48-6.47-.4-.3-.8-.38-1.99-.41-1.48-.07-1.51-.06-1.6.34zm3.1 1.13c.85.84.85 2.8 0 3.97-.39.57-1.46 1-2.43 1h-.73l.4-2.51c.23-1.39.45-2.61.48-2.73.06-.12.4-.2.94-.2.73 0 .95.08 1.34.47zm2.76 1.86c-.3 1.86-.6 3.54-.65 3.75-.08.39-.07.39 1.61.39 1.62 0 1.7-.02 1.81-.39.2-.77.15-.8-1.1-.8-1.06 0-1.2-.04-1.11-.31.03-.15.14-.61.19-1.02l.11-.72h1.16c1.2 0 1.36-.1 1.36-.86 0-.3-.14-.33-1.16-.33h-1.17l.17-1.02.17-1 1.2-.06c1.18-.05 1.21-.07 1.27-.53l.05-.46h-3.37zm54.31-2.89c-.12.55-1.12 6.78-1.12 6.94 0 .07.8.09 1.77.06 1.65-.06 1.82-.1 2.5-.57 1.02-.71 1.54-1.8 1.63-3.37.07-1.04.02-1.35-.32-2-.62-1.19-1.26-1.53-2.96-1.53-1.4 0-1.4 0-1.5.46zm3.01.9c.58.45.87 1.38.75 2.4-.2 1.7-1.02 2.52-2.67 2.66-.8.08-1.02.05-1.02-.14 0-.14.19-1.34.42-2.7l.43-2.53c0-.02.38-.04.83-.04.57 0 .96.1 1.26.34zm13.06 1.99c-.31 1.86-.6 3.54-.65 3.75-.07.34-.01.39.43.39.57 0 .49.2.95-2.39l.22-1.27.88 1.82c.82 1.74.9 1.84 1.38 1.84.29 0 .51-.09.51-.17 0-.1-.27-.72-.6-1.36-.32-.65-.59-1.23-.59-1.28 0-.05.15-.09.34-.09.19 0 .63-.25.97-.58.58-.52.63-.66.7-1.67.06-1.04.03-1.14-.45-1.68-.5-.56-.56-.58-2.02-.63l-1.53-.07zm3.21-2c.63.64.32 1.91-.56 2.22-.66.22-1.65.22-1.65-.02 0-.08.09-.7.19-1.36l.2-1.18h.73c.53 0 .85.1 1.09.34zm2.82-.89c-.17.81-1.12 6.64-1.12 6.84 0 .1.22.19.48.19h.49l.54-3.37c.31-1.84.6-3.53.65-3.75.07-.32.01-.38-.43-.38-.42 0-.52.09-.61.46zm19.3 2.89c-.3 1.86-.6 3.54-.65 3.75-.07.34-.02.39.42.39.58 0 .58 0 .9-2.18.12-.77.26-1.4.31-1.4.05 0 .46.8.9 1.76.77 1.7.8 1.73 1.41 1.79l.62.05-.62-1.2a7.8 7.8 0 01-.59-1.43c0-.12.27-.32.58-.42 1.65-.6 1.82-3.45.25-4.25a5.22 5.22 0 00-1.7-.22h-1.29zm3.2-2c.4.4.45 1.3.11 1.74-.29.38-1 .65-1.73.65-.66 0-.65.05-.4-1.55l.21-1.18h.73c.53 0 .85.1 1.09.34zm0 0'
			/>
			<path
				fill='#2691d4'
				d='M212.07 117.28c-.11.3-.83 1.84-1.58 3.4-1.75 3.65-1.71 3.55-1.08 3.55.45 0 .56-.1 1.03-1.1l.51-1.13 1.25.05 1.23.05.16 1.06c.15 1.05.15 1.07.7 1.07h.54l-.65-3.71c-.36-2.03-.64-3.72-.66-3.75 0-.02-.27-.04-.61-.04-.51 0-.63.07-.84.55zm1.02 2.67l.12 1.04h-.88c-.65 0-.87-.05-.8-.22l.65-1.47c.62-1.4.68-1.37.91.65zm3.41-2.85a194 194 0 00-1.1 6.86c0 .18.14.27.47.27h.47l.5-3.03.49-3.02.54 1.79.92 3.02.37 1.24h.67c.35 0 .66-.05.66-.14l.6-3.61c.32-1.93.59-3.54.59-3.63 0-.06-.22-.12-.5-.12s-.52.06-.52.1c0 .16-.85 5.24-.92 5.44-.05.19-.22-.3-1.2-3.54l-.62-2h-.66c-.56 0-.68.07-.76.38zm6.47-.16c-.05.11-.34 1.8-.66 3.75l-.58 3.54h1.48c1.79 0 2.43-.2 3.26-.99 1.65-1.56 1.69-4.87.07-6.06-.37-.3-.78-.38-1.99-.41-1.15-.06-1.53-.02-1.58.17zm2.77 1.07c.62.3.94 1.1.92 2.25-.05 1.8-1.3 3.03-2.97 2.91l-.74-.05.41-2.69.43-2.68h.73c.4 0 .97.13 1.22.26zm3.59-1.16c0 .09-.27 1.7-.6 3.63l-.59 3.61c0 .09.75.14 1.68.14h1.69l.08-.46c.05-.27.05-.53 0-.6-.03-.08-.58-.13-1.17-.13h-1.12l.1-.51.2-1.03c.1-.5.1-.5 1.26-.5 1.2 0 1.36-.1 1.36-.88 0-.29-.13-.32-1.2-.32-1.06 0-1.2-.03-1.11-.3.03-.16.13-.62.18-1.03l.12-.72h1.16c.9 0 1.17-.06 1.26-.27.27-.7.17-.75-1.6-.75-.94 0-1.7.06-1.7.12zm7.01 3.33c-.31 1.9-.62 3.59-.65 3.74-.09.28.07.31 1.5.31 1.85 0 2.65-.29 3.48-1.24 1-1.16 1.28-3.6.53-4.93-.56-1-1.28-1.33-2.95-1.33h-1.37zm3.34-2.19c.63.35.87.94.87 2.22 0 1.8-.95 2.84-2.74 2.96-.95.07-1.03.06-.95-.24.05-.18.27-1.41.48-2.75l.37-2.43h.75c.4 0 .95.1 1.22.24zm13.32 2.1c-.33 1.86-.62 3.54-.67 3.75-.07.34-.02.39.43.39.6 0 .54.17 1.07-3.15.2-1.31.42-2.44.47-2.5.07-.08.5 1.15.95 2.72l.86 2.84h1.34l.6-3.71.64-3.7h-.48c-.56 0-.52-.08-1 2.81a34.1 34.1 0 01-.48 2.53c-.08.18-.4-.69-.95-2.53l-.85-2.81h-1.38zm13.77.09c-.31 1.9-.62 3.59-.65 3.74-.07.24.02.31.42.31.58 0 .58-.02.87-1.87.1-.7.22-1.4.27-1.54.05-.13.48.56.95 1.59.85 1.77.89 1.82 1.43 1.82h.56l-.57-1.23a9.78 9.78 0 01-.6-1.41c0-.09.3-.29.66-.45 1.64-.7 1.74-3.39.17-4.19a5.17 5.17 0 00-1.68-.22h-1.3zm3.2-2.09c.38.4.43 1.3.1 1.74-.3.4-1.01.65-1.76.65-.58 0-.6-.02-.5-.5l.21-1.36.12-.87h.73c.53 0 .85.1 1.1.34zm2.37-1.12c0 .14-.05.36-.1.51-.09.22.03.27.6.27.52 0 .7.07.7.28 0 .29-.8 5.11-.95 5.81-.08.34-.01.39.41.39.61 0 .55.17 1.16-3.54l.46-2.94h.73c.7 0 .73-.01.73-.5v-.52h-1.87c-1.5 0-1.87.06-1.87.24zm4.59-.12c0 .09-.27 1.7-.6 3.63l-.6 3.61c0 .09.76.14 1.7.14h1.68l.08-.46c.05-.27.05-.53 0-.6-.03-.08-.58-.13-1.17-.13h-1.13l.1-.51.21-1.03c.1-.5.1-.5 1.26-.5 1.06 0 1.16-.04 1.26-.4.2-.77.15-.8-1.1-.8-1.06 0-1.2-.03-1.11-.3.03-.16.13-.62.19-1.03l.11-.72h1.16c.9 0 1.17-.06 1.26-.27.27-.7.17-.75-1.6-.75-.93 0-1.7.06-1.7.12zm0 0'
			/>
		</svg>
	)
}
