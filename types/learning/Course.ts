export interface Course {
  urlSlug: string;
  courseName: string;
  courseDescription: string;
  courseCardImage: {
    url: string;
    title: string;
  };
  coursesCollection: {
    items: {
      lessonName: string;
    }[];
  };
  lessons: Lesson[];
}

export interface LessonCard {
  coverImage: {
    url: string;
    title: string;
  };
  lessonActivitiesCollection: {
    total: number;
  };
  lessonIntroductionText: string;
  lessonName: string;
  sys: {
    id: string;
  };
  urlSlug: string;
}

export interface Lesson {
  sys: {
    id: string;
  };
  locale: ["en-gb" | "en-us" | "en-au" | "en-hk"] | null;
  lessonName: string;
  courseTags: string[];
  categoryTags: string[];
  urlSlug: string;
  lessonIntroductionText: string;
  featuredCourseDescription: string | null;
  lessonAuthor: string;
  featuredCourseMobileImage: {
    url: string;
    title: string;
  };
  featuredCourseImage: {
    url: string;
    title: string;
  };
  coverImage: {
    url: string;
    title: string;
  };
  lessonActivitiesCollection: {
    total: number;
  };
}
