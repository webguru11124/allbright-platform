export type BioRowProps = {
  index: number;
  info: any;
  evenRowColour: string;
  oddRowColour: string;
  title: string;
  isLink: boolean;
};

export type BioField = {
  title: string;
  info: any;
  isLink: boolean;
};

export type MemberCardProps = {
  lightBackground: string;
  id?: string;
  name?: string;
  theme: Theme;
  imageSrc?: string | undefined | null;
  initials?: string;
  occupation: string;
  location: string;
  bioFields: BioField[];
  isMentor?: boolean;
};

export enum ConnectionType {
  WEB = "WEB",
  QR_CODE_WEB = "QR_CODE_WEB",
  MENTOR_MATCHING = "MENTOR_MATCHING",
}

export enum ConnectionState {
  ACCEPTED = "ACCEPTED",
  PENDING = "PENDING",
  CANCELLED = "CANCELLED",
  REMOVED = "REMOVED",
  REJECTED = "REJECTED",
  IGNORED = "IGNORED",
}
