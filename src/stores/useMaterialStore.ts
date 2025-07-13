import { defineStore } from 'pinia';
import MaterialSelectManager from '@/configs/MaterialConfig/SelectManager';
import type { MaterialStateType } from '@/configs/ConfigTypes/MaterialStore.d.ts';
export const useMaterialStore = defineStore<'material', MaterialStateType>('material', {
  state: () => {
    return {
      currentMaterial: 'singleSelect',
      coms: {
        singleSelect: MaterialSelectManager.createSelect('singleSelector'),
      },
    };
  },
});
