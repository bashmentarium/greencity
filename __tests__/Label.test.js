import React from 'react'
import Label from '../components/Label'
import {render, cleanup} from '@testing-library/react-native'

describe('Label', () => {
  afterEach(cleanup)

  it('has a title', () => {
    const text = 'password'
    const title = render(<Label title={text} />).toJSON().children[0]
      .children[0]

    expect(title).toEqual(text)
  })
})
