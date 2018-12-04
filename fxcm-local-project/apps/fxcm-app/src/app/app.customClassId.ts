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
 
  return properties.classId;  // Always return the existing classId if you are not changing it
}