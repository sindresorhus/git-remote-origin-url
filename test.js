import test from 'ava';
import gitRemoteOriginUrl from './index.js';

test('main', async t => {
	t.truthy(await gitRemoteOriginUrl());
});
