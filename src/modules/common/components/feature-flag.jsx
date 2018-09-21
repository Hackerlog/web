import React from 'react';
import { Redirect } from 'react-router-dom';

import { HIDE_FEATURES } from '../../../utils/constants';

const featureFlag = FeatureRoute => props =>
  HIDE_FEATURES() ? <Redirect to="/" /> : <FeatureRoute {...props} />;

export default featureFlag;
