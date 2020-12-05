const Hashids = require("hashids/cjs")
const hashids = new Hashids(
  process.env.hash,
  2,
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
)

exports.handler = async (event) => {
  const { code: payload } = event.arguments.input

  const code = createCode(payload || "NX")
  return { code }
}

const createCode = (coachID, date) => {
  const key = getKey(process.env.min, process.env.max)
  return `${coachID}${hashids.encode(date.getTime())}${hashids.encode(key)}`
}

const getKey = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
