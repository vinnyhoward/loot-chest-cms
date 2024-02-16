export const inputFields = [
  {title: 'First Name', value: 'firstName', description: "Enter the user's first name."},
  {title: 'Last Name', value: 'lastName', description: "Enter the user's last name."},
  {
    title: 'Phone Number',
    value: 'phoneNumber',
    description: "Provide the user's contact phone number.",
  },
  {
    title: 'Email',
    value: 'email',
    description: "The user's email address for contact or notifications.",
  },
  {title: 'Address', value: 'address', description: "The user's physical mailing address."},
  {title: 'Country', value: 'country', description: 'The country in which the user resides.'},
  {title: 'State', value: 'state', description: "The state or region of the user's address."},
  {title: 'City', value: 'city', description: "The city part of the user's address."},
  {title: 'ZIP', value: 'zip', description: "The postal code for the user's address."},
  {
    title: 'Crypto Wallet Address',
    value: 'cryptoWalletAddress',
    description: "The user's cryptocurrency wallet address for transactions.",
  },
]

export const itemTierList = [
  {
    // 1/2 of the Overall Winning Percentage
    title: 'Common',
    value: 'common',
    description:
      'Items that are frequently found and offer basic enhancements or benefits. Takes up 50% of the Overall Winning Percentage.',
  },
  {
    // 1/4 of the Overall Winning Percentage
    title: 'Uncommon',
    value: 'uncommon',
    description:
      'Slightly rare items that provide a moderate level of enhancements or unique features. Takes up 25% of the Overall Winning Percentage.',
  },
  {
    // 1/8 of the Overall Winning Percentage
    title: 'Rare',
    value: 'rare',
    description:
      'Items that are hard to come by, offering significant benefits or unique aesthetics. Takes up 12.5% of the Overall Winning Percentage.',
  },
  {
    // 1/16 of the Overall Winning Percentage
    title: 'Legendary',
    value: 'legendary',
    description:
      'Highly sought after items with unparalleled benefits, often with unique attributes or lore. Takes up 6.25% of the Overall Winning Percentage.',
  },
  {
    // 1/32 of the Overall Winning Percentage
    title: 'Divine',
    value: 'divine',
    description:
      "The rarest items, offering divine or cosmic level benefits, often tied to the lore's deities or cosmic entities. Takes up 3.125% of the Overall Winning Percentage.",
  },
]

export default {
  name: 'rewardList',
  title: 'Rewards List',
  type: 'object',
  fields: [
    {
      name: 'rewardName',
      title: 'Reward Name',
      type: 'string',
      description:
        'Specify the name of the reward. This will be visible to users in the frontend interface.',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(42)
          .error('The Reward Name must be between 3 and 42 characters.'),
    },
    {
      name: 'rewardDescription',
      title: 'Reward Description',
      type: 'string',
      description:
        'Provide a compelling description for the reward. This will be displayed to users upon winning.',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(500)
          .error('The Reward Description must be between 3 and 500 characters.'),
    },
    {
      name: 'itemInventory',
      title: 'Item Inventory',
      type: 'number',
      description:
        'Indicate the total available inventory for this reward. Helps in managing reward availability.',
    },
    {
      name: 'couponCode',
      title: 'Coupon Code (Optional)',
      type: 'string',
      description:
        'If applicable, provide a coupon code associated with this reward. Users will see this upon winning.',
      validation: (Rule: any) =>
        Rule.min(3).max(15).error('The Coupon Code must be up to 15 characters.'),
    },
    {
      name: 'websiteUrl',
      title: 'Website Url (Optional)',
      type: 'string',
      description:
        'Include a link to a relevant website for more information on the reward. Ideal for external product pages or further details.',
    },
    {
      name: 'discordLink',
      title: 'Discord Link (Optional)',
      type: 'string',
      description:
        'Provide a Discord link for community engagement or support related to the reward. This could be a channel or direct message link.',
    },
    {
      name: 'itemRarity',
      title: 'Item Rarity',
      type: 'string',
      options: {
        list: itemTierList,
      },
      description:
        'Select the rarity tier for this reward. This will determine the chance of winning the reward.',
      validation: (Rule: any) => Rule.required().error('You must select a rarity tier.'),
    },
    {
      name: 'rewardImage',
      title: 'Reward Image',
      type: 'image',
      description:
        'Upload an image representing the reward. This visual will be shown to users when they win the reward.',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required().error('Including a reward image is necessary.'),
    },
    {
      name: 'formFields',
      title: 'Required Form Fields for User',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: inputFields,
      },
      description:
        'Select the form fields required from users to claim this reward. Ensures necessary information is collected for reward fulfillment.',
      validation: (Rule: any) => Rule.required().error('You must select at least one form field.'),
    },
  ],
}
