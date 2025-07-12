import { markRaw } from 'vue';
import { SingleOptionEditConfig } from '../EditConfig/BaseEdit';
import { BaseSelect } from './BaseSelect';
import SingleSelect from '@/components/Survey/Materials/SelectComs/SingleSelect.vue';
import OptionsEdit from '@/components/Survey/EditItem/OptionEdit.vue';
import type { SingleEditComKeys, SingleEditComType } from '../ConfigTypes/selector';

export class SingleSelector extends BaseSelect<SingleEditComType, keyof SingleEditComType> {
  constructor() {
    super(SingleSelect, 'single-select');
    const parentEditComs = super.initializeEditComs();
    this.editComs = {
      ...parentEditComs,
      options: new SingleOptionEditConfig(
        'options-edit',
        ['默认选项1', '默认选项2'],
        markRaw(OptionsEdit),
      ),
    };
  }
}
