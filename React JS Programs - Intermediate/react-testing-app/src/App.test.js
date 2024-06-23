import { render, screen } from '@testing-library/react';
import App from './App';

//describe("All Testing File",()=> {

  it('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    //screen.fin
    expect(linkElement).toBeInTheDocument();
  });

//})


