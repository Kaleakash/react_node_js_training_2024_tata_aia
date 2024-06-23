import { render, screen } from '@testing-library/react';
import FirstComponent from './FirstComponent';


  test('renders learn react link', () => {
    render(<FirstComponent />);
    const linkElement = screen.getByText(/first component/i);
    expect(linkElement).toBeInTheDocument();
  });



