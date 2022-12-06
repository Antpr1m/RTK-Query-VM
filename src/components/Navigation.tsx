import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
			<h1 className='font-bold'>Github Search</h1>

			<div>
				<Link to={'/'} className='mr-2'>Home</Link>
				<Link to={'/favorites'}>Favorites</Link>
			</div>
		</nav>
	)
}
export default Navigation