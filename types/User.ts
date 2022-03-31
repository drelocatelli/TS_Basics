export type User = {
    name: string,
    email: string,
    address: {
      city?: string,
      state: string
    }
  }