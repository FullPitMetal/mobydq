import React from 'react'
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CheckboxInput from '../../Components/FormInput/CheckboxInput';

describe('CheckboxInput unit test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheckboxInput
        id="Id"
        label="Label"
        helperText="Helper Text"
        placeholder="Enter indicator name"
        touched={jest.fn()}
        error=""
        value="value"
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
  });

  it('renders', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('CheckboxInput functional test', () => {
  let wrapper = mount(
      <CheckboxInput
        id="Id"
        label="Label"
        placeholder="Enter indicator name"
        touched={jest.fn()}
        error=""
        value="mock text"
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
  it ('renders', () => {
    expect(wrapper.length).toEqual(1);
  });
});