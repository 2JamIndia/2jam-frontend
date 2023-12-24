import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
// import { useDispath } from 'react-redux'

import { sendCheckPayment } from '../redux/actions/payment'

const Payment: React.FC = () => {
	// const dispatch = useDispatch()
	const [search] = useSearchParams();

	const { id } = useParams<{ id: string }>();

	React.useEffect(() => {
		const accessToken = search.get("accessToken");

		if (accessToken) {
			localStorage.setItem(
				"accessToken",
				accessToken
			);
		}

		sendCheckPayment(id)
	}, [])

	return (
		<div className='payment'></div>
	)
}

export default Payment