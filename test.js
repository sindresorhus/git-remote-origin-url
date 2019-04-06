import test from 'ava';
import gitRemoteOriginUrl from '.';

test('main', async t => {
	t.truthy(await gitRemoteOriginUrl(__dirname));
});
