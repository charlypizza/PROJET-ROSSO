import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';
import { schemaTypes } from './schemaTypes'; // Changed from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Rosso Cafe Marseille',

  projectId: 'tj9zovgw', // Your project ID
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    media(),
  ],

  schema: {
    types: schemaTypes, // This uses the schemaTypes variable
  },
});