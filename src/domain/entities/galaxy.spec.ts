import { Galaxy } from './galaxy';
import { test, expect } from 'vitest';

test('create an galaxy', () => {
  const galaxy = Galaxy.create({
    name: 'Via-láctea',
    age: 10000000000,
    composition: 'H and Hélio',
    scale_lightyear: 100000,
    shape: 'Spiral' 
  })

  expect(galaxy.props.scale_lightyear).toEqual(100000)
  expect(galaxy.props.name).toEqual('Via-láctea')
})