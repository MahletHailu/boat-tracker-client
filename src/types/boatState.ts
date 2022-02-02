
export type BoatState = {
  id: string,
  description: string,
}

export enum BoatStateEnum {
  Docked = 0,
  OutboundToSea = 1,
  InboundToHarbor = 2,
  Maintenance = 3,
}

export const BoatStates = [
  {
    value: 0,
    label: 'Docked',
  },
  {
    value: 1,
    label: 'Outbound to Sea',
  },
  {
    value: 2,
    label: 'Inbound to Harbor',
  },
  {
    value: 3,
    label: 'Maintenance',
  },
];

export const BoatStatesMobile = [
  {
    value: 0,
    label: 'D',
  },
  {
    value: 1,
    label: 'O',
  },
  {
    value: 2,
    label: 'I',
  },
  {
    value: 3,
    label: 'M',
  },
];