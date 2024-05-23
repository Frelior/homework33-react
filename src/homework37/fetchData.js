export default async function fetchData(api) {
  const data = await fetch(api)
  const users = await data.json()
  return users
}
