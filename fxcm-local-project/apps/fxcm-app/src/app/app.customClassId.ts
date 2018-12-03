import { FormItemProperties, FormItemField } from '@backbase/forms-ang/types';
 
export function customClassId(name: string, properties: FormItemProperties): string {
  
  // Add your FXCM custom properties here. 
  
  console.log('++ properties', properties);
 
  return properties.classId;  // Always return the existing classId if you are not changing it
}