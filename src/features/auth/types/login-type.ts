export type LoginInformation = {
   username: string,
   password: string
}

export type LoginResponse = {
   token: string | null
   userId: string | null
   roles: string[] | null
   refreshToken: string | null
}

export type UserInfo = LoginResponse