import { BrowserRouter, Switch, Route } from "react-router-dom"
import RoutingPath from "./RoutingPath"
import { AboutView } from "../views/AboutView"
import { HomeView } from "../views/HomeView"

export const Routing = (props: { children?:React.ReactChild }) => {

    return (
        <BrowserRouter>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.home} component={HomeView} />
                <Route exact path={RoutingPath.about} component={AboutView} />
            </Switch>
        </BrowserRouter>
    )
}
