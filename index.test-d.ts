import {expectType} from 'tsd';
import gitRemoteOriginUrl = require('.');

expectType<Promise<string>>(gitRemoteOriginUrl());
expectType<Promise<string>>(gitRemoteOriginUrl('my-custom-path'));
