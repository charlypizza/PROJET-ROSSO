import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'topLabel',
      title: 'Top Label (Address)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'image',
      title: 'Section Image',
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
      name: 'schedule',
      title: 'Schedule',
      type: 'object',
      fields: [
        { name: 'weekdays', title: 'Weekdays', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' },
      ],
    }),
    defineField({
      name: 'contactInstagram',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'contactInstagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'mapButtonText',
      title: 'Map Button Text',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Section Content',
      };
    },
  },
});