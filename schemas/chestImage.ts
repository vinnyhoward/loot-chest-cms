export default {
  name: 'chestImage',
  type: 'image',
  description:
    'The chest image will be the main image shown in the info pop-up. Image must be a compressed .png that is 500x500',
  validation: (Rule: any) => Rule.required().error('A chest image is required'),
  options: {
    hotspot: true,
  },
}
