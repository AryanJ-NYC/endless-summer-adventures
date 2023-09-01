import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      fields: [
        {
          name: 'splash_images',
          of: [{ options: { hotspot: true }, type: 'image' }],
          type: 'array',
        },
      ],
      name: 'homepage',
      title: 'Homepage',
      type: 'document',
    },
  ],
};
