export interface User {
  id?: string
  login: string
  role: 'guest' | 'user' | 'admin' | null
}
