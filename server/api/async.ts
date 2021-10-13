export default async (req, res) => {
  await someAsyncFunction()

  return {
    someData: true
  }
}
