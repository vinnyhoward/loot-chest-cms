export default {
  name: 'lootchest',
  title: 'Loot Chest',
  type: 'document',
  fields: [
    {
      name: 'chestName',
      title: 'Chest Name',
      type: 'string',
      description: 'The chest name that will be shown in the dropdown of the Loot Chest experience',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(22)
          .error('A Chest Name requires a minimum of 3 character and a max of 22'),
    },
    {
      name: 'chestDescription',
      title: 'Chest Description',
      type: 'string',
      description: 'The chest description will be shown in the info pop-up',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(1000)
          .error('A Description requires a minimum of 3 character and a max of 500'),
    },
    {
      name: 'isOpenToEveryone',
      title:
        'Are rewards open to everyone? (WARNING: Users can claim rewards without needing to own a key)',
      type: 'boolean',
      description:
        'This will allow users to claim rewards without needing a key but would need to login through Discord to open the community chest',
    },
    {
      name: 'chestModel',
      title: 'Loot Chest 3D Model',
      type: 'string',
      description:
        'The 3D model that will be shown during the Loot CHest experience. Only .glb models that are hosted on Google Cloud Provider are supported',
      validation: (Rule: any) =>
        Rule.required().uri({
          allowRelative: true,
          relativeOnly: false,
          scheme: ['https', 'http', 'mailto'],
        }),
    },
    {
      name: 'chestImage',
      title: 'Chest Image',
      type: 'chestImage',
    },
    {
      name: 'chestIcon',
      title: 'Chest Icon',
      type: 'chestIcon',
    },
    {
      name: 'rewardList',
      title: 'Chest Rewards',
      type: 'array',
      of: [{type: 'rewardList'}],
      validation: (Rule: any) => Rule.required().error('A reward list is required'),
    },
    {
      name: 'isHidden',
      title: 'Hide Loot CHest',
      type: 'boolean',
      description:
        'This option allows you to hide the Loot CHest. Useful for testing, updating content, and preparing for releases. (Default is false)',
    },
    {
      name: 'createdBy',
      title: 'Created By',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required()
          .min(3)
          .max(22)
          .error('A full name requires a minimum of 3 character and a max of 50'),
    },
  ],
  initialValue: {
    isHidden: false,
  },
}
