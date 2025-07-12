import { defineStore } from 'pinia';
import SelectManager from '@/configs/MaterialConfig/SelectManager';
import type { MaterialStateType } from '@/configs/ConfigTypes/MaterialStore.d.ts';
export const useMaterialStore = defineStore<'material', MaterialStateType>('material', {
  state: () => {
    return {
      currentMaterial: 'singleSelect',
      coms: {
        singleSelect: SelectManager.createSelect('singleSelector'),
      },
    };
  },
});
