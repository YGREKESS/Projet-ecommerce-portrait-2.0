import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function User_Account(props) {

	const userLogin = useSelector(state => state.userLogin)
	const { userInfos } = userLogin;

	useEffect(() => {
		if (!userInfos) {
			props.history.push('/')
		}
		return () => {
		}
	}, [userInfos])
	return (
		<div>
			<h1>User account</h1>
		</div>
	)
}
