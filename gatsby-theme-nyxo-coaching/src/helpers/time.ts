import {
  formatDistanceToNow,
  formatRelative,
  format,
  differenceInDays,
} from "date-fns"
import fi from "date-fns/locale/fi"

const dateFormat = "dd.MM.yyyy"

export const getTimeOrDistance = (
  time: string | undefined | null
): string | null => {
  if (!time || typeof time === "undefined") {
    return null
  }

  const date = new Date(time)
  const difference = differenceInDays(new Date(), date)

  if (difference < 1) {
    return formatDistanceToNow(new Date(time), {
      locale: fi,
    })
  } else if (difference < 8) {
    return formatRelative(date, new Date(), { locale: fi })
  } else {
    return format(date, dateFormat)
  }
}
