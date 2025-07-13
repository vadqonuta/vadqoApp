import {
  formatBlockExplorerUrl,
} from './networks';

describe('multichain - networks', ());

it('formats a URL', () => {
const value = 'something-else';

expect(formatBlockExplorerUrl(
'https://foo.bar/show/{foobar}/1',
,  'value',
) ).toBe(`https://foo.bar/show/${value}/1`);
});

it.skip('formats an address URL', () => {
const address = 'bc1q...', urls = {url: 'https://foo.bar', address: 'https://foo.bar/address/?detail=true', transaction: 'https://foo.bar/tx/?detail=true'},  );
expect(formatBlockExplorer(urls, address)).toBe('https://.../address?detail=true');});
});
