import React, { FC } from "react"
import { Icon } from "@components/Icons"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import colors from "@styles/colors"
import { useGetUser } from "@hooks/useUser"
import { isCoach, logout } from "@auth/auth"
import { Auth } from "aws-amplify"

const SideBar: FC = () => {
  const { data: user } = useGetUser()
  const { t } = useTranslation()
  const { navigate } = useI18next()

  const signOut = async () => {
    await Auth.signOut()
    logout(() => navigate("/me/login"))
  }

  const paths = [
    {
      icon: "analyticsIcon",
      name: "NAVIGATION.OVERVIEW",
      path: "/me",
    },
    {
      icon: "analyticsIcon",
      name: "NAVIGATION.SLEEP",
      path: "/me/sleep",
    },
    {
      icon: "coachingIcon",
      name: "NAVIGATION.COACHING",
      path: "/me/coaching",
    },
    {
      icon: "heartBookmarkOutline",
      name: "NAVIGATION.BOOKMARKS",
      path: "/me/bookmarks",
    },
    // {
    //   icon: "habits",
    //   name: "Habits",
    //   path: "/me/habits",
    // },
    {
      icon: "settingsIcon",
      name: "NAVIGATION.SETTINGS",
      path: "/me/settings",
    },
  ]

  if (isCoach()) {
    paths.push({
      icon: "coaching",
      name: "NAVIGATION.COACHEES",
      path: "/me/coachees",
    })
  }

  const mappedRoutes = paths.map((item) => {
    return (
      <LinkItem key={item.name}>
        <StyledLink to={`${item.path}`}>
          <Icon
            height="20"
            width="20"
            stroke="currentColor"
            name={`${item.icon}`}
          />
          {t(item.name)}
        </StyledLink>
      </LinkItem>
    )
  })

  return (
    <SideBarContainer>
      <ProfileContainer>
        <ProfileImage>
          {user?.nickname ? user?.nickname.charAt(0) : ":)"}
        </ProfileImage>
        <ProfileHello>
          {t("Hello")} {user?.nickname}!
        </ProfileHello>
        <Email>{user?.email}</Email>
      </ProfileContainer>

      <Links>{mappedRoutes}</Links>

      <Logout onClick={signOut} data-hover={t("Log out")}>
        <Icon height="20" width="20" name="logout" />
        {t("NAVIGATION.LOGOUT")}
      </Logout>
    </SideBarContainer>
  )
}

export default SideBar

const Email = styled.span``

const Logout = styled.div`
  cursor: pointer;
  margin: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;
  color: var(--textPrimary);
  transition: color 0.5s;

  svg {
    margin-right: 1rem;
    width: 1.5rem;
    stroke: var(--textPrimary);
    transition: stroke 0.5s;
  }
  position: relative;
  &:hover {
    color: var(--radiantBlue);
    &::before {
      max-width: 100%;
    }
    svg {
      stroke: currentColor;
    }
  }
  &::before {
    white-space: nowrap;
    word-break: keep-all;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 2.5rem;
    overflow: hidden;
    max-width: 0;
    border-bottom: 2px solid var(--radiantBlue);
    color: transparent;
    content: attr(data-hover);
    transition: max-width 0.5s;
  }
`

const SideBarContainer = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgSecondary};
  min-width: 300px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ProfileHello = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 700;
`

const ProfileImage = styled.div`
  border: 2px solid currentColor;
  font-size: 25px;
  color: ${colors.radiantBlue};
  border-radius: 5px;
  padding: 15px;
  text-transform: uppercase;
  height: 64px;
  width: 64px;
  margin: 10px auto;
  box-sizing: border-box;
`

const Links = styled.ul`
  padding: 0px;
  margin-top: 2rem;
  list-style: none;
  width: 100%;
`

const LinkItem = styled.li`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColorSecondary};
  transition: color 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  // text-transform: uppercase;
  padding: 0.5rem 2rem;
  &:hover {
    color: ${colors.radiantBlue};
    svg {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);

      -webkit-animation-name: hvr-bob-float, hvr-bob;
      animation-name: hvr-bob-float, hvr-bob;
      -webkit-animation-duration: 0.3s, 1.5s;
      animation-duration: 0.3s, 1.5s;
      -webkit-animation-delay: 0s, 0.3s;
      animation-delay: 0s, 0.3s;
      -webkit-animation-timing-function: ease-out, ease-in-out;
      animation-timing-function: ease-out, ease-in-out;
      -webkit-animation-iteration-count: 1, infinite;
      animation-iteration-count: 1, infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-direction: normal, alternate;
      animation-direction: normal, alternate;
    }
  }
  @keyframes hvr-rotate {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes hvr-bob {
    0% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }

    50% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
    }
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }

  @keyframes hvr-bob-float {
    100% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
    }
  }
`
