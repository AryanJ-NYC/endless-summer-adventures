import { type SchemaTypeDefinition } from 'sanity';
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

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
    {
      name: 'boat',
      title: 'Boat',
      type: 'document',
      orderings: [orderRankOrdering],
      fields: [
        orderRankField({ type: 'boat' }),
        {
          name: 'name',
          type: 'string',
          title: 'Boat Name',
          description: 'e.g., "19\' Custom Carolina Skiff"',
        },
        {
          name: 'images',
          type: 'array',
          title: 'Boat Images',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
        {
          name: 'description',
          type: 'array',
          title: 'Description',
          of: [{ type: 'block' }],
          description: 'Rich text description of the boat, engine, capabilities, etc.',
        },
        {
          name: 'features',
          type: 'array',
          title: 'Features',
          of: [{ type: 'string' }],
          description: 'List of boat features (e.g., "Minn Kota I-Pilot trolling motor")',
        },
        {
          name: 'capacity_info',
          type: 'text',
          title: 'Capacity Information',
          description: 'Description of passenger capacity and weight limits',
        },
        {
          name: 'rates',
          type: 'object',
          title: 'Rates',
          fields: [
            {
              name: 'half_day',
              type: 'number',
              title: 'Half Day Rate (4 hours)',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'half_day_hours',
              type: 'number',
              title: 'Half Day Hours',
              initialValue: 4,
            },
            {
              name: 'three_quarter_day',
              type: 'number',
              title: '3/4 Day Rate (6 hours)',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'three_quarter_day_hours',
              type: 'number',
              title: '3/4 Day Hours',
              initialValue: 6,
            },
            {
              name: 'full_day',
              type: 'number',
              title: 'Full Day Rate (8 hours)',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'full_day_hours',
              type: 'number',
              title: 'Full Day Hours',
              initialValue: 8,
            },
          ],
        },
        {
          name: 'base_passenger_count',
          type: 'number',
          title: 'Base Passenger Count',
          description: 'Number of passengers included in base rate',
          validation: (Rule) => Rule.required().min(1),
        },
        {
          name: 'additional_passenger_rate',
          type: 'number',
          title: 'Additional Passenger Rate',
          description: 'Cost per additional passenger beyond base count',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'max_passengers',
          type: 'number',
          title: 'Maximum Passengers',
          description: 'Maximum number of passengers allowed',
        },
        {
          name: 'max_weight',
          type: 'number',
          title: 'Maximum Passenger Weight (lbs)',
          description: 'Maximum total passenger weight in pounds',
        },
      ],
    },
  ],
};
