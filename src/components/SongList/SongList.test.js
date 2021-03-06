import React from 'react';
import { shallow } from 'enzyme';
import Component from './[ComponentName]';

describe('(Component) [ComponentName]', () => {
      let wrapper;
      let props;

      beforeEach(() => {
            props = {};
            wrapper = shallow(<Component {...props} />);
      });

      it('Displays a [ComponentName]', () => {
            expect(wrapper.find('.[ComponentName]').length).toEqual(1);
      });
});
