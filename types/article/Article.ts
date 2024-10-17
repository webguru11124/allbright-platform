export type RecommendedArticle = {
  author: string;
  title: string;
  url: string;
  sys: ArticleSys;
  heroImage: {
    image: ArticleHeroImage;
  };
  description?: string;
  topic?: string;
};

type ArticleSys = {
  id: string;
  firstPublishedAt?: number;
};

type ArticleHeroImage = {
  title: string;
  url: string;
};
