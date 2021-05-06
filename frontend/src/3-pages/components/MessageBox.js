import React from 'react'

export default function MessageBox({ type, message }) {
	return (
		<h6 className={type}>{message}</h6>
	)
}
