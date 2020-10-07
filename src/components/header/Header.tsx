import { Link as NonLocalizedLink } from "gatsby"
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import React, { FC } from "react"
import styled from "styled-components"
import { minDevice } from "@components/Primitives"
import { isLoggedIn } from "@auth/auth"
import useSiteMetadata from "@hooks/useSiteMetaData"
import { Hello } from "@components/personalization/Hello"

const Header: FC = () => {
  const { title } = useSiteMetadata()
  const { t } = useTranslation()
  const { originalPath, language } = useI18next()

  const status = isLoggedIn()
    ? { path: "me/details", title: "ME" }
    : { path: "me/login", title: "LOGIN" }

  const links = [{ path: "blog", title: "BLOG" }, { ...status }]

  return (
    <HeaderContainer>
      <InnerContainer>
        <Logo>
          <Link to="/" title={title}>
            {title}
          </Link>
          <Hello />
        </Logo>
        <Links>
          {links.map(({ title, path }) => (
            <Li key={title}>
              {title === "LOGIN" || title === "ME" ? (
                <MenuLink to={`/${path}`}>{t(`NAVIGATION.${title}`)}</MenuLink>
              ) : (
                <MenuLink to={`/${path}`}>{t(`NAVIGATION.${title}`)}</MenuLink>
              )}
            </Li>
          ))}
          {language === "en" ? (
            <Li key={"fi"}>
              <MenuLink to={originalPath} language={"fi"}>
                {t("fi")}
              </MenuLink>
            </Li>
          ) : (
            <Li key={"en"}>
              <MenuLink to={originalPath} language={"en"}>
                {t("en")}
              </MenuLink>
            </Li>
          )}
        </Links>
      </InnerContainer>
    </HeaderContainer>
  )
}

export default Header

const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  font-style: normal;
  font-family: var(--semibold);
  a {
    white-space: nowrap;
    color: hsl(255deg, 85%, 30%);
  }

  @media ${minDevice.mobileS} {
    flex: 1;
    margin-bottom: 1.5rem;
  }

  @media ${minDevice.tablet} {
    margin-bottom: 0rem;
  }
`

const HeaderContainer = styled.header``

const InnerContainer = styled.div`
  box-sizing: border-box;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${minDevice.mobileL} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
  }

  @media ${minDevice.mobileS} {
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
  }

  @media ${minDevice.tablet} {
    flex-direction: row;
    align-items: flex-end;
    padding: 1.5rem;
  }

  @media ${minDevice.tabletL} {
    flex-direction: row;
    align-items: flex-end;
    padding: 1.5rem;
  }

  @media ${minDevice.laptopL} {
    flex-direction: row;
    align-items: flex-end;
    padding: 2rem;
  }
`

const Links = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${minDevice.mobileS} {
    width: 100%;
    justify-content: center;
    padding: 0rem 0rem;
  }

  @media ${minDevice.tablet} {
    justify-content: flex-end;
    padding: 0rem 1rem;
  }
`

const Li = styled.li`
  list-style: none;
  font-family: var(--medium);
  font-weight: 500;
  font-style: normal;

  @media ${minDevice.mobileS} {
    font-size: 0.9rem;
    margin: 0rem 0.5rem 0rem 0.5rem;
  }

  @media ${minDevice.tablet} {
    font-size: 1rem;
  }
`

const MenuLink = styled(Link)`
  transition: 0.2s opacity cubic-bezier(0.075, 0.82, 0.165, 1);

  color: var(--radiantBlue);
  opacity: 0.9;
  &:hover,
  &:active {
    opacity: 1;
    color: var(--radiantBlue);
    border-bottom: 3px solid var(--radiantBlue);
    padding-bottom: 10px;
  }
`
