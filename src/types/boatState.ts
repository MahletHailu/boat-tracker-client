
export type BoatState = {
  Id: string,
  Description: string,
}

export enum BoatStateEnum {
  None = 0,
  Approved = 1,
  Unapproved = 2,
  Obsolete = 3,
}
