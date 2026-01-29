import { defineCollection, z } from 'astro:content';

const obras = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    description: z.string(),
    year: z.number().optional(),
    status: z.enum(['cartelera', 'anterior']),
    coverImage: z.string(),
    gallery: z.array(z.string()).optional(),
    youtubeId: z.string().optional(),
    duration: z.string().optional(),
    genre: z.string().optional(),
    awards: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

const premios = defineCollection({
  type: 'content',
  schema: z.object({
    obra: z.string(),
    obraSlug: z.string(),
    obraImage: z.string(),
    certamenes: z.array(z.object({
      nombre: z.string(),
      premios: z.array(z.object({
        tipo: z.enum(['premio', 'nominacion']),
        categoria: z.string(),
        persona: z.string().optional(),
      })),
    })),
    order: z.number().optional(),
  }),
});

const representaciones = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    time: z.string(),
    venue: z.string(),
    city: z.string(),
    province: z.string(),
    obra: z.string(),
    obraSlug: z.string(),
    event: z.string().optional(),
    image: z.string().optional(),
    ticketUrl: z.string().optional(),
    price: z.string().optional(),
  }),
});

export const collections = { obras, premios, representaciones };
