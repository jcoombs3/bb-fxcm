import { UiProgressBarModule } from './ui-progress-bar.module';

describe('UiProgressBarModule', () => {
  let uiProgressBarModule: UiProgressBarModule;

  beforeEach(() => {
    uiProgressBarModule = new UiProgressBarModule();
  });

  it('should create an instance', () => {
    expect(uiProgressBarModule).toBeTruthy();
  });
});
