import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'instagramPhoto',
  title: 'Instagram Photos',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Alternative)',
      type: 'url',
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