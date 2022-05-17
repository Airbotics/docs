export interface IArticle {
    section: string;
    title: string;
    subtitle: string;
    date: string;
    slug: string;
    content: string;
    time: string;
}

export interface ISection {
    title: string;
    slug: string;
    articles: {
        title: string;
        slug: string;
    }[];
}

export interface IArticleLink {
    title: string;
    slug: string;
}