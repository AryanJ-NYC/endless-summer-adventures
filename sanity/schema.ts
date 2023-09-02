import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      fields: [
        {
          name: 'splash_images',
          of: [{ options: { hotspot: true }, type: 'image' }],
          title: 'Splash Images',
          type: 'array',
        },
        {
          name: 'meet_captain_nick_img',
          options: { hotspot: true },
          type: 'image',
          title: 'Meet Captain Nick Image',
        },
        { name: 'meet_captain_nick_text', type: 'text', title: 'Meet Captain Nick Text' },
      ],
      name: 'homepage',
      title: 'Homepage',
      type: 'document',
    },
  ],
};
