import {defineField, defineType} from 'sanity'

export const testeType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'idade',
        type: 'number',
    }),
    defineField({
        name: 'foto',
        type: 'image',
    }),
  ],
})