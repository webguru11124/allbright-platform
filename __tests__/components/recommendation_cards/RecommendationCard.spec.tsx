import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react-native";

import RecommendationCard from "@/components/recommendation_cards";
import {
  ArticleRecommendationModel,
  ConnectionRecommendationModel,
  EventRecommendationModel,
  GroupRecommendationModel,
  LessonRecommendationModel,
  MentorshipRecommendationModel,
} from "@/types/Recommendations";

export const articleTestData: ArticleRecommendationModel = {
  author: "Author",
  category: "articles",
  description: "",
  heroImage: {
    image: {
      title: "",
      url: "",
    },
  },
  id: "",
  name: "",
  sys: {
    id: "",
    firstPublishedAt: 0,
  },
  title: "Title",
  topic: "",
  url: "",
};

export const connectionTestData: ConnectionRecommendationModel = {
  category: "connections",
  id: "string",
  firstName: "Laura",
  lastName: "Wallace",
  imageSrc: "string",
  lastActiveAt: 0,
  location: "Manchester, United Kingdom",
  jobTitle: "CRM Manager",
  jobCompany: "string",
  displayPhoto: "string",
  isMentee: false,
  isMentor: false,
};

export const courseTestData: LessonRecommendationModel = {
  category: "courses",
  id: "",
  sys: {
    id: "string",
  },
  locale: null,
  lessonName: "How To Negotiate Like A Pro",
  courseTags: ["string"],
  categoryTags: ["string"],
  urlSlug: "string",
  lessonIntroductionText:
    "Executive coach, business mentor, and founder of the Southwestern Empowerment Katy Kvalvik will teach you how to negotiate your way to success.",
  featuredCourseDescription: "string",
  lessonAuthor: "string",
  featuredCourseMobileImage: {
    url: "string",
    title: "string",
  },
  featuredCourseImage: {
    url: "string",
    title: "string",
  },
  coverImage: {
    url: "string",
    title: "string",
  },
  lessonActivitiesCollection: {
    total: 5,
  },
};

export const eventTestData: EventRecommendationModel = {
  category: "events",
  id: "string",
  cardImage: "string",
  description:
    "Does public speaking leave you filled with dread? You’re not alone. Join us for an event that will reframe your presentation narrative Present with Purpose, led by voice and communication coach Arabella...",
  endTime: 0,
  eventId: "string",
  startTime: 0,
  status: "string",
  title: "Present with Purpose: Crafting Your Presentation",
  location: "Zoom",
};

export const groupTestData: GroupRecommendationModel = {
  category: "groups",
  id: "string",
  name: "EvolveHer",
  description:
    "Bringing together like-minded women to connect, share and learn.",
  isPrivate: false,
  type: "string",
  headerImageUrl: "string",
  deleted: false,
  createdAt: 0,
  updatedAt: 0,
};

export const mentorshipTestData: MentorshipRecommendationModel = {
  category: "mentorships",
  id: "string",
  firstName: "Laura",
  lastName: "Wallace",
  imageSrc: "string",
  lastActiveAt: 0,
  location: "string",
  jobTitle: "CRM Manager / Data Insights Manager",
  jobCompany: "string",
  displayPhoto: "string",
  isMentee: false,
  isMentor: false,
};

describe("RecommendationCard", () => {
  it("renders article recommendation card", () => {
    render(<RecommendationCard {...articleTestData} />);
  });

  it("renders connection recommendation card", () => {
    render(<RecommendationCard {...connectionTestData} />);
  });

  it("renders course recommendation card", () => {
    render(<RecommendationCard {...courseTestData} />);
  });

  it("renders event recommendation card", () => {
    render(<RecommendationCard {...eventTestData} />);
  });

  it("renders group recommendation card", () => {
    render(<RecommendationCard {...groupTestData} />);
  });

  it("renders mentorship recommendation card", () => {
    render(<RecommendationCard {...mentorshipTestData} />);
  });
});
