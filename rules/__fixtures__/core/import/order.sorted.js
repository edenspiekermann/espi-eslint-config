/* We will only test the import ordering here. So we need to disable other rules */
/* eslint-disable import/extensions, import/no-unresolved, no-unused-vars */
import fs from 'fs';
import path from 'path';

import parser from '@typescript-eslint/parser';
import chalk from 'chalk';
import React, { useCallback, useEffect } from 'react';

import * as App from '../../App';
import Parent, { bar, foo } from '../parent';

import Component from './Component';
