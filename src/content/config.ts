// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // Use z.coerce.date() to parse date strings
    readtime: z.string(), // e.g., "8 mins"
    authorSlug: z.string(), // e.g., 'm_0'
    coauthorSlugs: z.array(z.string()).optional(),
    cover: z.string().optional(), // Filename, e.g., 'cover.jpg' in public/images/blogs/{slug}/
    tagSlugs: z.array(z.string()).default([]), // e.g., ['t_0', 't_1']
  }),
});

const eventCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    date: z.coerce.date(),
    time: z.string(), // e.g., "7:00 PM IST"
    location: z.string(),
    links: z.record(z.string().url()).optional(), // e.g., { registration: 'url', streaming: 'url' }
    cover: z.string().optional(), // Filename, e.g., 'cover.jpg' in public/images/events/{slug}/
    tagSlugs: z.array(z.string()).default([]),
    contributorSlugs: z.array(z.string()).optional(),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    startDate: z.coerce.date(),
    description: z.string(),
    links: z.record(z.string().url()).optional(), // e.g., { repository: 'url', liveDemo: 'url' }
    cover: z.string().optional(), // Filename, e.g., 'cover.jpg' in public/images/projects/{slug}/
    tagSlugs: z.array(z.string()).default([]),
    status: z.enum(['completed', 'in-progress', 'on-hold', 'planned']).default('in-progress'),
    leadMemberSlugs: z.array(z.string()).optional(),
    contributorSlugs: z.array(z.string()).optional(),
    techStack: z.array(z.string()).default([]),
  }),
});

const tagCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
  }),
});

const memberCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    joinYear: z.number().int().optional(),
    shortBio: z.string(),
    githubLink: z.string().url().optional(),
    linkedinLink: z.string().url().optional(),
    websiteLink: z.string().url().optional(),
    avatarPath: z.string().optional(), // Filename, e.g., 'avatar.jpg' in public/images/members/{slug}/
  }),
});

const membersListCollection = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number().int(),
    head: z.object({
      name: z.string(),
      slug: z.string(),
    }).optional(),
    coHead: z.array(z.object({
      name: z.string(),
      slug: z.string(),
    })).optional(),
    members: z.array(z.object({
      name: z.string(),
      slug: z.string(),
    })).optional(),
  }),
});

export const collections = {
  // Changed 'blog' to 'blogs' here to match your directory name
  blogs: blogCollection,
  events: eventCollection,
  projects: projectCollection,
  tags: tagCollection,
  members: memberCollection,
  members_list: membersListCollection,
};