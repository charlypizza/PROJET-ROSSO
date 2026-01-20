import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroPanel',
  title: 'Hero Panels',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Alternative)',
      type: 'url',
      description: 'Use this if you want to provide an external image URL instead of uploading',
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'alt',
      media: 'image',
    },
  },
});