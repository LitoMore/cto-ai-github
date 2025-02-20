export interface Config {
  accessToken: string
  email: string
  name: string
  currentIssue: number
  remoteRepos: RemoteRepo[]
}

export interface RemoteRepo {
  owner: string
  repo: string
  url?: string
}

export interface CommandOptions {
  accessToken: string
  username: string
  currentRepo: RemoteRepo
}
