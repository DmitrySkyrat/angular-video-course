import { DurationPipe } from './duration.pipe';

describe('DurationPipe', (): void => {
  let pipe: DurationPipe;

  beforeEach((): void => {
    pipe = new DurationPipe();
  });
  it('create an instance', (): void => {
    expect(pipe).toBeTruthy();
  });
  it('should transform course duration to string', (): void => {
    const duration = 90;
    const formatDuration = '1h 30min';
    const newDate: string = pipe.transform(duration);
    expect(newDate).toBe(formatDuration);
  });
});
