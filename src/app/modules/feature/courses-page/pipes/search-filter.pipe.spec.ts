import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', (): void => {
  it('create an instance', (): void => {
    const pipe = new SearchFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
