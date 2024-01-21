import { FC } from "react";
import { Route, Switch } from "wouter";
import { AboutPage } from "./about";
import { DashboardPage } from "./dashboard";
import { ErrorPage } from "./error";
import { HomePage } from "./home";
import { ProjectsPage } from "./projects";
import { SignInPage } from "./sign-in";
import { SignUpPage } from "./sign-up";

export const Pages: FC = () => (
	<Switch>
		<Route path="/about" component={AboutPage} />
		<Route path="/dashboard" component={DashboardPage} />
		<Route path="*" component={ErrorPage} />
		<Route path="/" component={HomePage} />
		<Route path="/projects" component={ProjectsPage} />
		<Route path="/sign-in" component={SignInPage} />
		<Route path="/sign-up" component={SignUpPage} />
	</Switch>
);
