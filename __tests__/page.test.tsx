import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('should display Hi World text', () => {
    render(<Home />)
    
    // Check that the Hi World text is present
    const hiWorldElement = screen.getByText('Hi World')
    expect(hiWorldElement).toBeInTheDocument()
  })

  it('should have Hi World as an h1 element', () => {
    render(<Home />)
    
    // Check that Hi World is rendered as an h1 element
    const hiWorldHeading = screen.getByRole('heading', { name: 'Hi World' })
    expect(hiWorldHeading).toBeInTheDocument()
    expect(hiWorldHeading.tagName).toBe('H1')
  })

  it('should have correct styling classes on Hi World', () => {
    render(<Home />)
    
    const hiWorldElement = screen.getByText('Hi World')
    expect(hiWorldElement).toHaveClass('text-2xl', 'font-bold', 'text-center', 'sm:text-left')
  })
}) 