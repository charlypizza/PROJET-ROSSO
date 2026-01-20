import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuSubcategory',
  title: 'Menu Subcategories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Subcategory Name',
      type: 'string',
      description: 'E.g., SANDO BAR, COFFEE BAR, MATCHA BAR',
    }),
    defineField({
      name: 'barTitle',
      title: 'Bar Title',
      type: 'string',
      description: 'Display title for the bar section',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'footer',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
      description: 'Drag to reorder items',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subtitle',
    },
  },
});