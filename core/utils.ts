
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { ISection, IArticle, IArticleLink } from '../types';

const contentDirectory = join(process.cwd(), 'content');

// humanise sections, e.g. building-software -> Building Software
const humanise = (str: string): string => {
    const capitalised = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalised.replace(/-/g, ' ');
}

// get all docs sections
const getSections = (): string[] => fs.readdirSync(contentDirectory);

// get articles for a given section
const getArticlesInSection = (dir: string): string[] => fs.readdirSync(join(contentDirectory, dir));

// get the table of contents
export const getToc = (): ISection[] => {
    const sectionDirs = getSections();
    const toc: ISection[] = [];
    sectionDirs.forEach(dir => {
        const articleSlugs = getArticlesInSection(dir);
        toc.push({
            title: humanise(dir),
            slug: dir,
            articles: articleSlugs.map(articleSlug => ({
                title: humanise(articleSlug.replace(/\.md$/, '')),
                slug: articleSlug.replace(/\.md$/, '')
            }))
        })
    });
    return toc;
}

// get a single article
export const getTutorialBySlug = (dir: string, slug: string): IArticle => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(contentDirectory, dir, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
        title: humanise(realSlug),
        section: dir,
        subtitle: data.subtitle,
        date: data.date,
        slug: realSlug,
        content,
        time: readingTime(content).text
    } as IArticle;
}