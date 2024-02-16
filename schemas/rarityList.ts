import {RarityInput} from '../components/RarityInput'

export const FIELDS = [
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
  name: 'rarityList',
  title: 'Rarity List',
  type: 'document',
  fields: [
    {
      name: 'overallWinningPercentage',
      title: 'Overall Winning Percentage',
      type: 'number',
      description:
        'Set the overall chance (from 1% to 100%) that a user will win any prize at all. This percentage is then distributed among the item tiers. Input the value as a percentage (e.g., enter 50 for a 50% chance).',
      validation: (Rule: any) => Rule.min(0.01).max(100).positive().required(),
      components: {
        input: RarityInput,
      },
      options: {
        decimalScale: 0,
        fixedDecimalScale: true,
        allowNegative: false,
        suffix: ' %',
      },
    },
  ],
}
