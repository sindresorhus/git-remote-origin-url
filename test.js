import test from 'ava';
import m from './';

test(async t => {
	t.ok(await m(__dirname));
});
