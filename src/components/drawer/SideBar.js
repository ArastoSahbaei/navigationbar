import React from 'react'
import './SideBar.css'

export const SideBar = (props) => {
	let drawerClasses = 'side-drawer'
	if (props.openDrawer) { drawerClasses = 'side-drawer open' }
	return (
		<nav className={drawerClasses}>
			<h1 onClick={() => props.setOpenDrawer(false)}>LOL</h1>
			<ul>
				<li>
					<a href="/">Products</a>
				</li>
				<li>
					<a href="/">Users</a>
				</li>
			</ul>
		</nav>
	)
}
