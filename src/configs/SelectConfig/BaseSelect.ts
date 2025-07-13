import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import type {
  BaseEditComKeys,
  BaseEditComType,
  EditComStatusMap,
  EditStatusType,
  OptionStatusType,
  VueComType,
} from '../ConfigTypes/selector';
import {
  BaseEditConfig,
  OptionsEditConfig,
  SizeEditConfig,
  StyleEditConfig,
  TextEditConfig,
} from '../EditConfig/BaseEdit';
import TitleEdit from '@/components/Survey/EditItem/Editor/TitleEdit.vue';
import DescEdit from '@/components/Survey/EditItem/Editor/DescEdit.vue';
import SizeEdit from '@/components/Survey/EditItem/Editor/SizeEdit.vue';
import WeightEdit from '@/components/Survey/EditItem/Editor/WeightEdit.vue';
import ItalicEdit from '@/components/Survey/EditItem/Editor/ItalicEdit.vue';
import ColorEdit from '@/components/Survey/EditItem/Editor/ColorEdit.vue';
import AlignEdit from '@/components/Survey/EditItem/Editor/AlignEdit.vue';

// 定义 BaseSelect 类
export class BaseSelect<T extends BaseEditComType, K extends keyof T> {
  type: ReturnType<typeof markRaw>; // type 类型为 markRaw 返回值类型
  name: string; // 类的名称属性
  id: string; // 类的唯一标识属性
  editComs: T;

  // 构造函数，初始化类的属性
  constructor(typeComponent: VueComType, name: string) {
    this.type = markRaw(typeComponent); // 使用 markRaw 处理传入的组件
    this.name = name; // 初始化名称
    this.id = uuidv4(); // 使用 uuidv4 生成唯一标识
    this.editComs = this.initializeEditComs() as T;
  }

  protected initializeEditComs(): BaseEditComType {
    return {
      title: new TextEditConfig('title-editor', '单选题默认标题', markRaw(TitleEdit)),
      desc: new TextEditConfig('desc-edit', '单选题默认描述', markRaw(DescEdit)),
      align: new StyleEditConfig('align-edit', ['左对齐', '居中对齐'], markRaw(AlignEdit)),
      titleSize: new SizeEditConfig('size-edit', ['22', '20', '18'], markRaw(SizeEdit)),
      descSize: new SizeEditConfig('size-edit', ['22', '20', '18'], markRaw(SizeEdit)),
      titleWeight: new StyleEditConfig('weight-edit', ['加粗', '正常'], markRaw(WeightEdit)),
      descWeight: new StyleEditConfig('weight-edit', ['加粗', '正常'], markRaw(WeightEdit)),
      titleItalic: new StyleEditConfig('italic-edit', ['倾斜', '正常'], markRaw(ItalicEdit)),
      descItalic: new StyleEditConfig('italic-edit', ['倾斜', '正常'], markRaw(ItalicEdit)),
      titleColor: new TextEditConfig('color-edit', '#000', markRaw(ColorEdit)),
      descColor: new TextEditConfig('color-edit', '#903999', markRaw(ColorEdit)),
    };
  }

  setEditComStatus(name: K, status: EditComStatusMap<keyof T, T>[K]) {
    console.log('status: ', status);
    console.log('name: ', name);
    const editor = this.editComs[name];
    if (editor instanceof BaseEditConfig) {
      editor.setStatus(status);
      console.log('editor: ', editor);
    }
  }

  resetEditStatusWithName(name: K) {
    const editor = this.editComs[name];
    if (editor instanceof BaseEditConfig) {
      editor.resetStatus();
    }
  }

  resetAllEditStatus() {
    let keys: K[] = Object.keys(this.editComs) as K[];
    keys.forEach((key) => {
      this.resetEditStatusWithName(key);
    });
  }
}
