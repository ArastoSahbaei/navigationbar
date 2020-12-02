import React, { useState } from 'react'
import { SideBar } from '../drawer/SideBar'
import { BackDrop } from '../backdrop/BackDrop'
import './MobileNavigation'
import { HamburgerBar } from '../hamburgerbar/HamburgerBar'

export const MobileNavigation = () => {
	const [openDrawer, setOpenDrawer] = useState(false)

	return (
		<div>
			<HamburgerBar setOpenDrawer={setOpenDrawer} />
			{openDrawer
				? <div>
					<SideBar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
					<BackDrop setOpenDrawer={setOpenDrawer} />
				</div>
				: null}


		</div>
	)
}
