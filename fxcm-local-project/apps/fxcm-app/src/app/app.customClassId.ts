import { FormItemProperties, FormItemField } from '@backbase/forms-ang/types';
 
export function customClassId(name: string, properties: FormItemProperties): string {
  
  console.log('++ properties', properties);
  
  // Add your FXCM custom properties here. 
  if (properties.classId === 'BbFormButtonComponent') {
    return 'FxcmFormButtonComponent';
  }
  
  if (properties.classId === 'BbFormInputTextComponent') {
    return 'FxcmFormInputTextComponent';
  }
  
  if (properties.classId == 'BbFormSelectComponent') {
    const props: FormItemField = properties as FormItemField;
    if (props.cssClassValue === 'flags') { // TODO: find how to determine the flag selector
      return 'FxcmFormFlagSelectorComponent';
    }
  }
 
  return properties.classId;  // Always return the existing classId if you are not changing it
}