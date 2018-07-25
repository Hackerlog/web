import * as React from 'react';
import { Redirect } from 'react-router';

import { HIDE_FEATURES } from '../utils/constants';

const hideFeature = (FeatureRoute: any) => (props: any) =>
  HIDE_FEATURES ? <Redirect to="/" /> : <FeatureRoute {...props} />;

export default hideFeature;
