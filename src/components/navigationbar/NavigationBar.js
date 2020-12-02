import React from 'react'
import './Navigationbar.css'
import { MobileNavigation } from '../mobilenavigation/MobileNavigation'
import { DesktopNavigation } from '../desktopnavigation/DesktopNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const NavigationBar = () => {
	const { height, width } = useWindowDimensions();

	const displayNavigationBarDependingOnWindowSizeWidth = () => {
		return (width <= 1000) ? <MobileNavigation /> : <DesktopNavigation />
	}

	return (
		<div className="navigationBarWrapper">
			<h1> Logotype </h1>
			{displayNavigationBarDependingOnWindowSizeWidth()}
		</div>
	)
}
