export default {
  name: 'chestImage',
  type: 'image',
  description:
    'Upload the primary chest image to be featured prominently within the information pop-up window. For optimal loading and display quality, the image should be a compressed .png file with dimensions of exactly 500x500 pixels. Utilize the hotspot functionality to select the focal point of the image, ensuring it adapts gracefully across various viewing contexts.',
  validation: (Rule: any) => Rule.required().error('A chest image is required'),
  options: {
    hotspot: true,
  },
}
