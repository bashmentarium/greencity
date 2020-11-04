import React from 'react'
import Input from '../components/Input'
import {render, cleanup, fireEvent} from '@testing-library/react-native'

describe('Text input', () => {
  afterEach(cleanup)

  it('fires a changeText event', () => {
    const onEventMock = jest.fn()
    const {getByPlaceholderText} = render(
      <Input placeholder='email' onChangeText={onEventMock} />
    )

    fireEvent(getByPlaceholderText('email'), 'onChangeText', 'email address')
    expect(onEventMock).toHaveBeenCalledWith('email address')
  })
})
