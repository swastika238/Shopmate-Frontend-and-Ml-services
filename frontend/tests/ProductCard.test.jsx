import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductCard from '../src/components/product/ProductCard.jsx'

describe('ProductCard', () => {
  it('renders product name and price', () => {
    render(<ProductCard product={{ id: 1, name: 'Test Phone', price: 299, features: [] }} />)
    expect(screen.getByText('Test Phone')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
  })
})
