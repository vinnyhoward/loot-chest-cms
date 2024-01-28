export default {
  name: 'chestIcon',
  type: 'image',
  options: {
    hotspot: true,
  },
  description:
    'Upload the icon image to be displayed beside the chest name in selection menus. Ensure the image is precisely 40x40 pixels for optimal presentation and consistency across the platform. The hotspot feature enables focal point selection for better responsiveness across different displays.',
  validation: (Rule: any) => Rule.required().error('A chest icon is required'),
}
