import React from 'react';
import { NextComponentType } from 'next';

import DefaultPageTransitionWrapper from '../components/page-transition-wrappers/Default';

const About: NextComponentType = () => (
  <DefaultPageTransitionWrapper>
    <h1>About</h1>
  </DefaultPageTransitionWrapper>
);

export default About;
