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
        { name: 'boat_title', type: 'string', title: 'Boat Title' },
        { name: 'boat_text', type: 'text', title: 'Boat Text' },
        {
          name: 'boat_imgs',
          type: 'array',
          title: 'Boat Images',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
      name: 'homepage',
      title: 'Homepage',
      type: 'document',
    },
  ],
};
