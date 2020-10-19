import React, { FC, useContext } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Header from "@components/header/Header"
import { lightTheme } from "@styles/themes"
import ModalRoutingContext from "@gatsby/component-renderer/modal-routing-context"

type Props = {
  children?: JSX.Element | (JSX.Element | null)[] | null
}

const Layout: FC<Props> = ({ children }) => {
  const { modal } = useContext(ModalRoutingContext)

  return (
    <ThemeProvider theme={lightTheme}>
      {modal ? null : <Header />}

      <GlobalStyle />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout

const GlobalStyle = createGlobalStyle`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	a {
		text-decoration: none;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1;
	}

	ol,
	ul {
		list-style: none;
	}

	blockquote,
	q {
		quotes: none;
	}

	blockquote {
		&:before,
		&:after {
			content: "";
			content: none;
		}
	}

	q {
		&:before,
		&:after {
			content: "";
			content: none;
		}
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}


	@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
    url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gfD_vx3rCubqg.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  src: local("Montserrat SemiBold"), local("Montserrat-SemiBold"),
    url(https://fonts.gstatic.com/s/montserrat/v14/JTURjIg1_i6t8kCHKm45_bZF3gnD_vx3rCs.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

:root {
  --radiantBlue: #4a5aef;
  --secondaryBg: white;
  --bg: #f4f5f9;
  --textPrimary: #555;

  --green: #298e7e;
  --lightGreen: #d1faf4;
  --textSecondary: #797283;
  --maxWidth: 1440px;
  --primaryFont: "Montserrat", sans-serif;
  --lightShadow: rgba(255, 255, 255, 0.52);
  --darkShadow: rgb(163, 177, 198, 0.5);
  --shadowBorder: 0.5px solid var(--lightShadow);

  --shadow: 9px 9px 22px -2px var(--darkShadow),
    -9px -9px 18px var(--lightShadow);
  --shadowInset: inset 9px 9px 22px -2px var(--darkShadow),
    -9px -9px 18px var(--lightShadow);

  --shadowFull: 0px 1px 5px 5px rgb(163, 177, 198, 0.25);

  --semibold: "Montserrat", -apple-system, BlinkMacSystemFont, sans-serif;
  --medium: "Montserrat-medium", -apple-system, BlinkMacSystemFont, sans-serif;

  --morning: #ffecf2;
  --morningAccent: #f42d97;
}

body {
  font-family: "Montserrat", sans-serif;
  color: var(--textPrimary);
  font-size: 16px;
  font-weight: normal;
  font-style: normal;

  p {
    font-family: "Montserrat", sans-serif;
    font-weight: normal;
    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", sans-serif;
    line-height: 30px;
    font-weight: 600;
    font-style: normal;
    color: var(--textPrimary);
  }

  a {
    color: var(--radiantBlue);

    &:hover,
    &:active {
      color: var(--radiantBlue);
    }
  }
`
