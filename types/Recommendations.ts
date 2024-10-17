import { RecommendedArticle } from "./article/Article";
import { Lesson } from "./learning/Course";

export type RecommendationType =
  | "connections"
  | "groups"
  | "events"
  | "courses"
  | "articles"
  | "mentorships"
  | "promotion";

export interface APIRecommendationStructure {
  connections: ConnectionRecommendationModel[];
  groups: GroupRecommendationModel[];
  events: EventRecommendationModel[];
  courses: CourseRecommendationModel[];
  articles: ArticleRecommendationModel[];
  mentorships: MentorshipRecommendationModel[];
}

export type MixedRecommendationArray = (
  | ConnectionRecommendationModel
  | GroupRecommendationModel
  | EventRecommendationModel
  | LessonRecommendationModel
  | ArticleRecommendationModel
  | MentorshipRecommendationModel
  | PromotionRecommendationModel
)[];

export interface User {
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
}

export interface ConnectionRecommendationModel extends User {
  category: "connections";
}

export interface MentorshipRecommendationModel extends User {
  category: "mentorships";
}

export interface ArticleRecommendationModel extends RecommendedArticle {
  category: "articles";
  id: string;
  name: string | null;
}

interface CourseRecommendationModel {
  id: string;
}

export interface LessonRecommendationModel extends Lesson {
  category: "courses";
  id: string;
}

export interface EventRecommendationModel {
  category: "events";
  id: string;
  cardImage: string;
  description: string;
  endTime: number;
  eventId: string;
  startTime: number;
  status: string;
  title: string;
  location: string;
}

export interface GroupRecommendationModel {
  category: "groups";
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  type: string;
  headerImageUrl: string;
  deleted: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface PromotionRecommendationModel {
  id: string;
  category: "promotion";
  tag: "gift" | "elevate" | "accelerate" | "lifestyle";
}

export type RecommendationTypeToModelMap = {
  connections: ConnectionRecommendationModel;
  groups: GroupRecommendationModel;
  events: EventRecommendationModel;
  courses: CourseRecommendationModel;
  articles: ArticleRecommendationModel;
  mentorships: MentorshipRecommendationModel;
  promotion: MentorshipRecommendationModel;
};
