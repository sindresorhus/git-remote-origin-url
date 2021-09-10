import {expectType} from 'tsd';
import gitRemoteOriginUrl from './index.js';

expectType<Promise<string>>(gitRemoteOriginUrl());
expectType<Promise<string>>(gitRemoteOriginUrl({cwd: 'my-custom-path'}));
