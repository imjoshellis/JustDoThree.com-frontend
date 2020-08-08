import { shallow } from 'enzyme'
import React from 'react'
import App from './App'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

it('renders without crashing', () => {
  shallow(<App />)
})

it('renders a <Header />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Header />)).toEqual(true)
})

it('renders a <Main />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Main />)).toEqual(true)
})

it('renders a <Footer />', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.contains(<Footer />)).toEqual(true)
})
