import {RarityInput} from '../components/RarityInput'

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
