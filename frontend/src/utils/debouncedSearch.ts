export const debouncedSearch = (
  callback: (query: string) => void,
  delay: number,
) => {
  let timeout: ReturnType<typeof setTimeout>
  return (query: string) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(query), delay)
  }
}
