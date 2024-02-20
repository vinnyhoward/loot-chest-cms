import {useCallback, useState} from 'react'
import {set, unset} from 'sanity'
import {Stack, TextInput, Text, Card} from '@sanity/ui'

export function RarityInput(props: any) {
  const {elementProps, onChange, value = ''} = props
  const [error, setError] = useState<string | null>(null)

  const validateValue = (val: number) => {
    if (isNaN(val) || val < 0.01 || val > 100) {
      setError('Value must be between 1% and 100%')
    } else {
      setError(null)
    }
  }

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value
      const decimalValue = parseFloat(nextValue) / 100

      validateValue(decimalValue * 100)
      onChange(nextValue ? set(decimalValue) : unset())
    },
    [onChange],
  )

  const tierChances = {
    common: value * 0.5 * 100,
    uncommon: value * 0.25 * 100,
    rare: value * 0.125 * 100,
    legendary: value * 0.0625 * 100,
    divine: value * 0.03125 * 100,
  }

  return (
    <Stack space={2}>
      <TextInput
        {...elementProps}
        onChange={handleChange}
        value={(value * 100).toString()}
        type="number"
        step="0.01"
        max="100"
        min="0.01"
      />
      {error && (
        <Card tone="critical" padding={2} radius={2}>
          <Text size={1} style={{color: 'red'}}>
            {error}
          </Text>
        </Card>
      )}
      <Card>
        <Text style={{color: '#5E98D9', marginTop: '15px'}} size={1}>
          Common chance: {tierChances.common.toFixed(2)}%
        </Text>
        <Text style={{color: '#4B69FF', marginTop: '15px'}} size={1}>
          Uncommon chance: {tierChances.uncommon.toFixed(2)}%
        </Text>
        <Text style={{color: '#8847FF', marginTop: '15px'}} size={1}>
          Rare chance: {tierChances.rare.toFixed(2)}%
        </Text>
        <Text style={{color: '#D32EE6', marginTop: '15px'}} size={1}>
          Legendary chance: {tierChances.legendary.toFixed(2)}%
        </Text>
        <Text style={{color: '#F8AE39', marginTop: '15px'}} size={1}>
          Divine chance: {tierChances.divine.toFixed(2)}%
        </Text>
      </Card>
    </Stack>
  )
}
