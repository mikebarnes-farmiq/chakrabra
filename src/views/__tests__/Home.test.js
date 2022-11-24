import ReactDOM from "react-dom";
import Home from "../Home";
import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


test('loads and displays greeting', async () => {
  const {debug} = render(<Home />)

  debug()

  const i = screen.getByTestId('input')
  const t = screen.getByTestId('toast')

  fireEvent.click(i)
  fireEvent.click(t)
  fireEvent.input(i, {target: {value: 'test'}})

  debug()

  //await waitFor(() => screen.getAllByText('Account created.'))

  //expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  //expect(screen.getByRole('button')).toBeDisabled()
})
