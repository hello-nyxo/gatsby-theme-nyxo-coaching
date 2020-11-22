import React, { FC } from "react"
import { RouteComponentProps, Router } from "@reach/router"
import PrivateRoute from "@components/auth/PrivateRoute"
import SideBar from "../sidebar/SideBar"
import Details from "./Details"
import Sleep from "./Sleep"
import styled from "styled-components"
import { Coachees } from "./Coachees"
import { Settings } from "./Settings"
import { Coaching } from "./Coaching"
import { Bookmarks } from "./Bookmarks"

export const Home: FC<RouteComponentProps> = () => {
  return (
    <AppContainer>
      <SideBar />
      <UIContainer>
        <Router>
          <PrivateRoute path={`/`} component={Details} />
          <PrivateRoute path={`/sleep`} component={Sleep} />
          <PrivateRoute path={`/coaching`} component={Coaching} />
          <PrivateRoute path={`/coachees`} component={Coachees} />
          <PrivateRoute path={`/bookmarks`} component={Bookmarks} />
          <PrivateRoute path={`/settings`} component={Settings} />
        </Router>
      </UIContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
`

const UIContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex: 1;
  height: 100%;
  flex-direction: column;
  margin: 0px auto;
  padding: 1rem 2rem;
  @media (max-width: 599px) {
    padding: 0.5rem;
  }
`
