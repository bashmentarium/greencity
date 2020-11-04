import React from 'react'
import Button from '../components/Button'
import {render, cleanup, fireEvent} from '@testing-library/react-native'

describe('Button', () => {
  afterEach(cleanup)

  it('has a title', () => {
    const text = 'Continue'
    const title = render(<Button title={text} />).toJSON().children[0]
      .children[0]

    expect(title).toEqual(text)
  })

  it('shows an indicator while loading', () => {
    const text = 'ActivityIndicator'
    const indicator = render(<Button indicator />).toJSON().children[0].type

    expect(indicator).toEqual(text)
  })

  it('fires an onPress event', () => {
    const onPressMock = jest.fn()
    const {getByText} = render(
      <Button title='Continue' handlePress={onPressMock} />
    )
    const button = getByText('Continue')
    fireEvent.press(button)

    expect(onPressMock).toHaveBeenCalled()
  })
})
