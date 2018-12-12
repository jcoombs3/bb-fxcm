import { WizardStepModule } from './wizard-step.module';

describe('WizardStepModule', () => {
  let wizardStepModule: WizardStepModule;

  beforeEach(() => {
    wizardStepModule = new WizardStepModule();
  });

  it('should create an instance', () => {
    expect(wizardStepModule).toBeTruthy();
  });
});
