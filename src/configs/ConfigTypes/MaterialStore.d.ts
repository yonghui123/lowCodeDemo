import type { SingleSelectConfig } from './SingleSelectConfig';

export interface MaterialComType {
  singleSelect: SingleSelectConfig;
}

export type MaterialComKeys = keyof MaterialComType;

export interface MaterialStateType {
  currentMaterial: MaterialComKeys;
  coms: MaterialComType;
}
