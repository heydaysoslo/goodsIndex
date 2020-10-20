import { formatDistance, format } from 'date-fns'

export const getDistanceFromToday = (date: number | Date) => {
  const now = new Date()
  return formatDistance(now, date)
}

export const getDate = (
  date: number | Date,
  dateFormat: string = 'dd. MMMM-yy'
) => {
  return format(date, dateFormat)
}
