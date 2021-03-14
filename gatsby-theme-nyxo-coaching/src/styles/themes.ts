import { DefaultTheme } from "styled-components"
import colors from "@styles/colors"

export const fonts = {
  regular: "Montserrat",
  medium: "Montserrat",
  bold: "Montserrat",
}
declare module "styled-components" {
  export interface DefaultTheme {
    bgPrimary?: string
    bgSecondary?: string

    bgSecondaryTransparent?: string

    titleColor: string
    errorColor: string
    textColorPrimary?: string
    textColorSecondary?: string

    iconColor: string

    buttonColorPrimary?: string
    buttonColorSecondary?: string

    hairlineColor?: string
    gradient: string[]
    shadow: string

    fontRegular: string
    fontMedium: string
    fontBold: string
  }
}

export const lightTheme: DefaultTheme = {
  bgPrimary: "#F6F6F9",
  bgSecondary: "#FFFFFF",
  bgSecondaryTransparent: "rgba(255,255,255,0.3)",

  titleColor: "hsl(255deg, 85%, 30%)",
  errorColor: "#e71934",
  textColorPrimary: "#202125",
  textColorSecondary: "#5e6267",
  iconColor: "#f7f8fb",
  buttonColorPrimary: colors.radiantBlue,
  buttonColorSecondary: colors.radiantBlue,
  hairlineColor: "#e4e8eb",
  gradient: [
    "rgba(246,246,249,0)",
    "rgba(246,246,249,0)",
    "rgba(246,246,249,1)",
  ],
  shadow: `1px 1px 5px rgba(32, 33, 37, 0.1)`,

  fontRegular: fonts.regular,
  fontMedium: fonts.medium,
  fontBold: fonts.bold,
}

export const darkTheme: DefaultTheme = {
  bgPrimary: "black",
  bgSecondary: "#333",
  bgSecondaryTransparent: "rgba(51,51,51,0.3)",

  titleColor: "hsl(255deg, 85%, 30%)",
  errorColor: "#e71934",
  textColorPrimary: "white",
  textColorSecondary: "rgba(255,255,255,0.75)",
  iconColor: "#f7f8fb",
  buttonColorPrimary: "white",
  buttonColorSecondary: "white",
  hairlineColor: "#C9C9CB",
  gradient: ["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,1)"],
  shadow: ` 1px 1px 5px rgba(32, 33, 37, 0.1)`,

  fontRegular: fonts.regular,
  fontMedium: fonts.medium,
  fontBold: fonts.bold,
}
