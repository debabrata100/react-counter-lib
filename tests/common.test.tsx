import * as React from 'react'
import { render } from '@testing-library/react'

import { MyCounter } from '../src'

import 'jest-canvas-mock'

describe('Common Render', () => {
  it('renders without crashing', () => {
    render(<MyCounter />)
  })
})
