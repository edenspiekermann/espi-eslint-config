/* We will only test the import ordering here. So we need to disable other rules */
/* eslint-disable import/extensions, import/no-unresolved, no-unused-vars */
import React, { useEffect, useCallback } from 'react';

import { alpha, beta } from '../other';
import Parent, { gamma, delta } from '../parent';
