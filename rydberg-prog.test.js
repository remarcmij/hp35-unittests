import { expect } from 'chai'
import { execProg, initialState } from '../unittests'

const rydbergProg = `
  9.10938e-31
  4
  1.60218e-19
  pow
  mul
  8
  2
  8.85419e-12
  pow
  mul
  3
  6.62608e-34
  pow
  mul
  2.99792e+8
  mul
  div
`

describe('processor', () => {
  it('should run the Rydberg program', () => {
    const expectedRydbergConstant = 1.0973781e+7
    const finalState = execProg({...initialState}, rydbergProg)
    const [computedRydbergConstant] = finalState.stack
    expect(Math.abs(computedRydbergConstant - expectedRydbergConstant) < 1.0).to.be.true
  })
})