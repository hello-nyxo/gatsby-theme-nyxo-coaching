import styled from "styled-components"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "525px",
  tablet: "768px",
  tabletL: "850px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
  desktopL: "2560px",
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`,
}

export const minDevice = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletL: `(min-width: ${size.tabletL})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
}

export const P = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 32px;
  margin-bottom: 30px;
`
export const H1 = styled.h1`
  line-height: 40px;
`

export const TextContainer = styled.div`
  position: relative;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 2rem;
  box-sizing: border-box;

  @media ${minDevice.mobileS} {
    padding: 0rem 1rem;
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 2rem;
  box-sizing: border-box;

  @media ${minDevice.mobileS} {
    padding: 0rem 1rem;
  }

  @media ${minDevice.mobileM} {
    padding: 0rem 1rem;
  }

  @media ${minDevice.mobileL} {
    padding: 0rem 2rem;
  }

  @media ${minDevice.tablet} {
    padding: 0rem 1rem;
  }

  @media ${minDevice.laptop} {
    padding: 0rem 2rem;
  }

  @media ${minDevice.laptopL} {
    padding: 0rem 2rem;
  }
`

export const ContentContainer = styled.div`
  max-width: 50rem;
  line-height: 1.5rem;
`

export const H2 = styled.h2`
  font-size: 2.5rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
