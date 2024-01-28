export default {
  name: 'chestIcon',
  type: 'image',
  options: {
    hotspot: true,
  },
  description: 'The chest icon beside the chest name in the dropdown. Image must be 40x40',
  validation: (Rule: any) => Rule.required().error('A chest icon is required'),
}
