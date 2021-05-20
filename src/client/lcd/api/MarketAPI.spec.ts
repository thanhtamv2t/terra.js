import { APIRequester } from '../APIRequester';
import { MarketAPI } from './MarketAPI';
import { Dec } from '../../../core/numeric';

const c = new APIRequester('http://3.34.120.243:1317/');
const market = new MarketAPI(c);

describe('MarketAPI', () => {
  it('parameters', async () => {
    await expect(market.parameters()).resolves.toMatchObject({
      pool_recovery_period: expect.any(Number),
      mint_base_pool: expect.any(Dec),
      burn_base_pool: expect.any(Dec),
      min_stability_spread: expect.any(Dec),
    });
  });
});