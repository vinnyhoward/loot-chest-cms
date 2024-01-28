export default {
  name: 'rewardList',
  title: 'Rewards List',
  type: 'object',
  fields: [
    {
      name: 'rewardName',
      title: 'Reward Name',
      type: 'string',
      description: 'The name that will be shown on the frontend',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(42)
          .error('A Description requires a minimum of 3 character and a max of 42'),
    },
    {
      name: 'rewardDescription',
      title: 'Reward Description',
      type: 'string',
      description: 'This description will be shown when the user wins the prize',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(500)
          .error('A Description requires a minimum of 3 character and a max of 500'),
    },
    {
      name: 'itemInventory',
      title: 'Item Inventory',
      type: 'number',
      description: 'Inventory available',
    },
    {
      name: 'couponCode',
      title: 'Coupon Code (Optional)',
      type: 'string',
      description: 'The coupon code that will be shown with the description.',
      validation: (Rule: any) =>
        Rule.min(3).max(15).error('Coupon code can only have a max of 15 characters'),
    },
    {
      name: 'websiteUrl',
      title: 'Website Url (Optional)',
      type: 'string',
      description: 'Allows the user to click on a reward and be routed to its websites',
    },
    {
      name: 'discordLink',
      title: 'Discord Link (Optional)',
      type: 'string',
      description:
        'A link to a discord channel or message that will be shown when the user wins a prize',
    },
    {
      name: 'winPercentage',
      title: 'Win Percentage',
      type: 'number',
      description:
        'Chance of winning the reward between the values of 0 and 1. 0 being 0%, 0.25 being 25%, 0.5 being 50% and 1 being 100% etc',
      validation: (Rule: any) => Rule.required().error('A win percentage is required'),
    },
    {
      name: 'openDiscordTicket',
      title: 'Ask user to open Discord ticket?',
      type: 'boolean',
    },
    {
      name: 'rewardImage',
      title: 'Reward Image',
      type: 'image',
      description: 'The reward image shown when a user wins the prize',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error('A reward image is required'),
    },
    // {
    //   name: 'userFormFields',
    //   title: 'Required Form Fields for User',
    //   type: 'userFormFields',
    //   validation: (Rule: any) => Rule.required().error('At least one form field is required'),
    // },
  ],
  initialValue: {
    openDiscordTicket: false,
  },
}
