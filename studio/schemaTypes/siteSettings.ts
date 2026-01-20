import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
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
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'mapUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'logoWhite',
      title: 'Logo White (Footer)',
      type: 'image',
    }),
    defineField({
      name: 'logoRed',
      title: 'Logo Red (Navbar)',
      type: 'image',
    }),
    defineField({
      name: 'logoWhiteUrl',
      title: 'Logo White URL (Alternative)',
      type: 'url',
    }),
    defineField({
      name: 'logoRedUrl',
      title: 'Logo Red URL (Alternative)',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
});