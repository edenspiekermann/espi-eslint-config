/* We will only test the import ordering here. So we need to disable other rules */
/* eslint-disable import/extensions, import/no-unresolved, no-unused-vars */
import Component from './Component';
import path from 'path';
import chalk from 'chalk';
import Parent, { bar, foo } from '../parent';
import * as App from '../../App';
import fs from 'fs';
import React, { useCallback, useEffect } from 'react';
import parser from '@typescript-eslint/parser';
