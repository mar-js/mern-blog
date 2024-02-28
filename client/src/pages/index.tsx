import { useUsersContext } from "@/contexts";
import { Footer, Header } from "@/layouts";
import { FC } from "react";
import { Redirect, Route, Switch } from "wouter";
import { AboutPage } from "./about";
import { DashboardPage } from "./dashboard";
import { ErrorPage } from "./error";
import { HomePage } from "./home";
import { ProjectsPage } from "./projects";
import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";

export const Pages: FC = () => {
	const { isLogged } = useUsersContext();

	return (
		<>
			<Header />
			<Switch>
				<Route path="/about" component={AboutPage} />
				{isLogged ? (
					<Route path="/dashboard" component={DashboardPage} />
				) : (
					<Redirect to="/" />
				)}
				<Route path="*" component={ErrorPage} />
				<Route path="/" component={HomePage} />
				<Route path="/projects" component={ProjectsPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/sign-up" component={SignUpPage} />
			</Switch>
			<Footer />
		</>
	);
};
