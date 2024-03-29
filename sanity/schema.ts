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
        { name: 'marketing_blurb', type: 'string', title: 'Marketing Blurb' },
        {
          name: 'meet_captain_nick_img',
          options: { hotspot: true },
          type: 'image',
          title: 'Meet Captain Nick Image',
        },
        { name: 'meet_captain_nick_text', type: 'text', title: 'Meet Captain Nick Text' },
        { name: 'gallery_title', type: 'string', title: 'Gallery Title' },
        {
          name: 'gallery',
          type: 'array',
          title: 'Gallery',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
          name: 'gallery_caption',
          type: 'string',
          title: 'Gallery Caption',
        },
      ],
      name: 'homepage',
      title: 'Homepage',
      type: 'document',
    },
  ],
};
