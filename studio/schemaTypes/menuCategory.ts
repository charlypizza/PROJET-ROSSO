import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuCategory',
  title: 'Menu Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'E.g., Boissons, Sandwichs',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'displayName',
      title: 'Display Name (French)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Category Image/Video',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (if applicable)',
      type: 'url',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Alternative)',
      type: 'url',
    }),
    defineField({
      name: 'subcategories',
      title: 'Subcategories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuSubcategory' }] }],
      description: 'Drag to reorder subcategories',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
});