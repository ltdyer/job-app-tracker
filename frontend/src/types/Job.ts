export enum Status {
  Waiting = "Waiting",
  Accepted = "Accepted",
  Interviewing = "Interviewing",
  Rejected = "Rejected"
}
export interface Job {
  company: string,
  status: Status,
  title: string
}

