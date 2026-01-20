import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryMedia',
  title: 'Gallery Media',
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
      name: 'mediaUrl',
      title: 'Media URL (Image or Video)',
      type: 'url',
    }),
    defineField({
      name: 'isVideo',
      title: 'Is Video?',
      type: 'boolean',
      initialValue: false,
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
      isVideo: 'isVideo',
    },
    prepare({ title, media, isVideo }) {
      return {
        title: title || 'Untitled',
        subtitle: isVideo ? 'Video' : 'Image',
        media,
      };
    },
  },
});