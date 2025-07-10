import { markRaw } from 'vue';
import { BaseEdit } from '../EditConfig/BaseEdit';
import { BaseSelect } from './BaseSelect';
import SingleSelect from '@/components/Survey/Materials/SelectComs/SingleSelect.vue';
import TitleEdit from '@/components/Survey/EditItem/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditItem/DescEdit.vue';
import SizeEdit from '@/components/Survey/EditItem/SizeEdit.vue';
import WeightEdit from '@/components/Survey/EditItem/WeightEdit.vue';
import ItalicEdit from '@/components/Survey/EditItem/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditItem/ColorEdit.vue';
import OptionsEdit from '@/components/Survey/EditItem/OptionEdit.vue';
import AlignEdit from '@/components/Survey/EditItem/AlignEdit.vue';

type EditComKeys =
  | 'title'
  | 'desc'
  | 'options'
  | 'align'
  | 'titleSize'
  | 'descSize'
  | 'titleWeight'
  | 'descWeight'
  | 'titleItalic'
  | 'descItalic'
  | 'titleColor'
  | 'descColor';

export class SingleSelector extends BaseSelect {
  editComs: Record<EditComKeys, BaseEdit>;
  constructor() {
    super(SingleSelect, 'single-select');
    this.editComs = {
      title: new BaseEdit('title-editor', '单选题默认标题', markRaw(TitleEdit)),
      desc: new BaseEdit('desc-edit', '单选题默认描述', markRaw(DescEdit)),
      options: new BaseEdit('options-edit', ['默认选项1', '默认选项2'], markRaw(OptionsEdit)),
      align: new BaseEdit('align-edit', ['左对齐', '居中对齐'], markRaw(AlignEdit)),
      titleSize: new BaseEdit('size-edit', ['22', '20', '18'], markRaw(SizeEdit)),
      descSize: new BaseEdit('size-edit', ['22', '20', '18'], markRaw(SizeEdit)),
      titleWeight: new BaseEdit('weight-edit', ['加粗', '正常'], markRaw(WeightEdit)),
      descWeight: new BaseEdit('weight-edit', ['加粗', '正常'], markRaw(WeightEdit)),
      titleItalic: new BaseEdit('italic-edit', ['倾斜', '正常'], markRaw(ItalicEdit)),
      descItalic: new BaseEdit('italic-edit', ['倾斜', '正常'], markRaw(ItalicEdit)),
      titleColor: new BaseEdit('color-edit', '#000', markRaw(ColorEdit)),
      descColor: new BaseEdit('color-edit', '#903999', markRaw(ColorEdit)),
    };
  }

  setEditComStatus(name: EditComKeys, status: string | string[]) {
    this.editComs[name].setStatus(status);
  }

  resetEditStatusWithName(name: EditComKeys) {
    this.editComs[name].resetStatus();
  }

  resetAllEditStatus() {
    let keys: EditComKeys[] = Object.keys(this.editComs) as EditComKeys[];
    keys.forEach((key) => {
      this.editComs[key].resetStatus();
    });
  }
}
