import React from 'react'

export default function Home(props) {
	if (props.active) {
		return (
			<h1>This is the Home page</h1>
		)
	}
}
