import $api from '../../http/'

export const sendCheckPayment = (id: string | undefined) => {
	$api.get(`/payment/check/${id}`).then(() => {
		window.location.href = "/go/training"
	})
}