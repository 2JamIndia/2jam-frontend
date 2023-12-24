import React from "react";
import { useDispatch } from "react-redux";
import {
	Route,
	Routes,
	Navigate,
	useLocation,
	useSearchParams,
} from "react-router-dom";
import { compose } from "redux";
import moment from "moment";
import "moment/locale/ru";

import { useTypedSelector } from "./hooks/useTypedSelector";

import { fetchUser } from "./redux/actions/user";

import { Header, Footer } from "./components/";

import { Payment, Login, Training, PassingCourse, Policy, PublicOffer, RecoveryPassowrd, RecoveryPassowrdSuccess, RecoveryPassowrdConfirm } from "./pages/";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
		YooMoneyCheckoutWidget?: any;
		_tmr?: any;
	}
}

const App: React.FC = () => {
	const dispatch = useDispatch();

	const [search] = useSearchParams();
	const { pathname } = useLocation();

	const { user, isLoaded } = useTypedSelector(({ user }) => user);
	// const masters = useTypedSelector(({masters}) => masters.items);
	// const categories = useTypedSelector(({categories}) => categories.items);

	React.useEffect(() => {
		// const accessToken = search.get("accessToken");

		// if (accessToken) {
		// 	localStorage.setItem(
		// 		"accessToken",
		// 		accessToken
		// 	);

		// 	// window.location.reload()
		// }

		//     let cords: any = ["scrollX", "scrollY"];

		//     // Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
		//     window.addEventListener("unload", (e) =>
		//         cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
		//     );

		//     // Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
		//     window.scroll(...cords.map((cord: any) => localStorage[cord]));

		if (!isLoaded && localStorage.getItem("accessToken")) {
			dispatch(fetchUser() as any);
		}

		//     if (!Object.keys(masters).length) {
		//         dispatch(fetchMasters());
		//     }

		//     if (!Object.keys(categories).length) {
		//         dispatch(fetchCategories());
		//     }
	}, []);

	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<div className="wrapper">
				{pathname.indexOf("/go/login") !== -1 || pathname.indexOf("/go/password-recovery") !== -1 || pathname.indexOf("/payment") !== -1 ? null : (
					<Header />
				)}

				<React.Suspense fallback={<></>}>
					<Routes>
						<Route path="/payment/:id" element={<Payment />} />

						<Route path="/" element={<Navigate to={localStorage.getItem("accessToken") ? "/go/training" : "/go/login"} />} />

						<Route path="/go/login" element={localStorage.getItem("accessToken") ? <Navigate to={"/go/training"} /> : <Login />} />

						<Route path="/go/password-recovery" element={localStorage.getItem("accessToken") ? <Navigate to={"/go/training"} /> : <RecoveryPassowrd />} />
						<Route path="/go/password-recovery/success" element={localStorage.getItem("accessToken") ? <Navigate to={"/go/training"} /> : <RecoveryPassowrdSuccess />} />

						<Route path="/go/password-recovery/confirm/:hash" element={localStorage.getItem("accessToken") ? <Navigate to={"/go/training"} /> : <RecoveryPassowrdConfirm />} />

						<Route path="/go/training" element={localStorage.getItem("accessToken") ? <Training /> : <Navigate to={"/go/login"} />} />
						<Route
							path="/go/passing/:id/:num"
							element={localStorage.getItem("accessToken") ? <PassingCourse /> : <Navigate to={"/go/login"} />}
						/>

						<Route path="/policy" element={<Policy />} />

						<Route path="/public-offer" element={<PublicOffer />} />

						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</React.Suspense>

				{pathname.indexOf("/go/login") !== -1 || pathname.indexOf("/go/password-recovery") !== -1 || pathname.indexOf("/payment") !== -1 ? null : (
					<Footer />
				)}
			</div>
		</>
	);
};

export default App;
