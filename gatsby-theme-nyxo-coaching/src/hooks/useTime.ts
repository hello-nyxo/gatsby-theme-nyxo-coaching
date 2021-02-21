import { formatWithOptions, formatRelativeWithOptions } from "date-fns/fp"
import { useI18next } from "gatsby-plugin-react-i18next"
import { fi, enUS } from "date-fns/locale"

export const useFormat = (
  format?: string
): CurriedFn1<number | Date, string> => {
  const { language } = useI18next()
  return formatWithOptions(
    {
      locale: language === "fi" ? fi : enUS,
    },
    format ?? "MMM dd"
  )
}

export const useRelativeFormat = () => {
  const { language } = useI18next()
  return formatRelativeWithOptions({
    locale: language === "fi" ? fi : enUS,
  })
}
