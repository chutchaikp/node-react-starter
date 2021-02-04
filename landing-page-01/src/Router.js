import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./pages/common/Footer";
import Header from "./pages/common/Header";
import ScrollToTop from "./pages/common/ScrollToTop";

const Router = () => {
	return (
		<Suspense fallback={null}>
			<Header />
			<ScrollToTop />

			<Switch>
				{routes.map((ritm) => {
					return (
						<Route key={ritm.component}
							path={ritm.path}
							exact={ritm.exact}
							component={lazy(() => import(`./pages/${ritm.component}`))}
						/>
					);
				})}
			</Switch>

			<Footer />

		</Suspense>
	);
};

export default Router;

const routes = [
	{
		path: ["/", "/home"],
		exact: true,
		component: "Home",
	}
];