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
  firstName?: string;
  lastName?: string;
  occupation: string;
  location: string;
  bioFields: BioField[];
};
