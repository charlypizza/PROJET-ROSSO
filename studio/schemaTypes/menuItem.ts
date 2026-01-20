import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuItem',
  title: 'Menu Items',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Display Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each line of description',
    }),
    defineField({
      name: 'variant',
      title: 'Variant Text',
      type: 'string',
      description: 'E.g., "VANILLE, CINNAMON"',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'variant',
    },
  },
});