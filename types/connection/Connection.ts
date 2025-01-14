import { ConnectionState } from "@/features/Member/types";

export type Connection = {
  id: string;
  firstName: string;
  lastName: string;
  imageSrc: string;
  lastActiveAt: number;
  location: string;
  jobTitle: string;
  jobCompany: string;
  displayPhoto: string;
  isMentee: boolean;
  isMentor: boolean;
  state: ConnectionState;
  substate: string;
  isMyRequest: boolean;
};
