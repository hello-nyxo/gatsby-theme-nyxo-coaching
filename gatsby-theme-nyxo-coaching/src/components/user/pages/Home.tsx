import React, { FC } from "react"
import { RouteComponentProps, Router } from "@reach/router"
import PrivateRoute from "@components/auth/PrivateRoute"
import SideBar from "../sidebar/SideBar"
import Details from "./Details"
import Sleep from "./Sleep"
import styled from "styled-components"
import { Coachees } from "./Coachees"

export const Home: FC<RouteComponentProps> = () => {
  return (
    <AppContainer>
      <SideBar />
      <UIContainer>
        <Router>
          <PrivateRoute path={`/`} component={Details} />
          <PrivateRoute path={`/sleep`} component={Sleep} />
          <PrivateRoute path={`/coaching`} component={Sleep} />
          <PrivateRoute path={`/coachees`} component={Coachees} />
        </Router>
      </UIContainer>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
`

const UIContainer = styled.div`
  position: relative;
  display: flex;
  background-color: var(--bgBlue);
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
