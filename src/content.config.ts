import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				tag: z.string().optional(),
				tags: z.array(z.string()).optional(),
				date: z.union([z.date(), z.string()]).optional(),
			}),
		}),
	}),
};
