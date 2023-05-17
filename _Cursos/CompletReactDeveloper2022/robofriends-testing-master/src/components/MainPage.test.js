import React from "react";
import { shallow } from "enzyme";
import MainPage from './MainPage'

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
})

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
  //Gets the instance of the component being rendered as the root node passed into shallow().
  //NOTE: can only be called on a wrapper instance that is also the root instance.
  expect(wrapper.instance().filterRobots()).toEqual([])
})
it('filters existing robots', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'john',
      'email': "john@gmail.com"
    }],
    searchField: 'a',
    isPending: false
  }
  const wrapper2 = shallow(<MainPage {...mockProps2} />)
  expect(wrapper2.instance().filterRobots()).toEqual([])
})

it('fileters Robots correctly 2', () => {
  const filteredRobots = [{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }]
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }],
    searchField: 'Le',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />)
  expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
});
