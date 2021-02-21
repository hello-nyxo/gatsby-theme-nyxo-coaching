import { useTranslation } from "gatsby-plugin-react-i18next"

type ReadingTime = {
  short: string
  long: string
}

export const useReadingTime = (
  time: number | undefined | null
): ReadingTime => {
  const { t } = useTranslation()
  const rTime = time ?? 5
  return {
    short: `${rTime} ${t("READING_TIME.SHORT")}`,
    long: `${rTime} ${t("READING_TIME.LONG")}`,
  }
}
