export type Group = {
  id: string;
  name: string;
  description: string;
  headerImageUrl: string;
  deleted?: boolean;
  goals?: string[];
  highlightColour?: string;
  isPrivate?: boolean;
  createdAt: number;
  updatedAt: number;
  type?: string;
  resources?: Resource[];
};

export interface Resource {
  availableFrom: number;
  category: string;
  description: string;
  downloadUrl: string;
  id: string;
  title: string;
  displayImageUrl?: string;
}
