import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import type {
  EditStatusType,
  OptionStatusType,
  PicTitleStatusArrType,
  StringStatusArrType,
  ValueStatusArrType,
  VueComType,
} from '../ConfigTypes/selector';
export abstract class BaseEditConfig<STATUS extends EditStatusType> {
  id: string; // 组件唯一标识
  status: STATUS; // 组件状态
  defaultStatus: STATUS; // 默认状态，可选
  isShow: boolean; // 是否显示
  name: string; // 组件名称
  editCom: ReturnType<typeof markRaw>; // editCom 类型为 markRaw 返回值类型
  constructor(name: string, status: STATUS, editCom: VueComType) {
    this.id = uuidv4();
    this.status = status;
    this.defaultStatus = status;
    this.name = name;
    this.isShow = true;
    this.editCom = editCom;
  }

  // 获取对应的值，因为不同的编辑器获取的值不一样，所以不叫getStatus
  abstract getState(): string | number | OptionStatusType;

  setStatus(s: STATUS) {
    this.status = s;
  }

  resetStatus() {
    this.status = this.defaultStatus;
  }
}

export class TextEditConfig extends BaseEditConfig<string> {
  getState() {
    return this.status;
  }
}

export abstract class OptionsEditConfig<T extends OptionStatusType> extends BaseEditConfig<T> {
  currentStatus: number = 1; // 当前状态，可选
}

export class SizeEditConfig extends OptionsEditConfig<StringStatusArrType> {
  getState() {
    return this.status[this.currentStatus];
  }
}

//  font-weight：加粗 / 正常 ，font-style： 倾斜 / 正常 等只有两个值的
export class StyleEditConfig extends OptionsEditConfig<StringStatusArrType> {
  getState() {
    return this.currentStatus;
  }
}

export class ValueEditConfig extends OptionsEditConfig<ValueStatusArrType> {
  getState() {
    return this.status[this.currentStatus].value;
  }
}

export class PicEditConfig extends OptionsEditConfig<PicTitleStatusArrType> {
  getState() {
    return this.status[this.currentStatus].value;
  }
}

export class SingleOptionEditConfig extends OptionsEditConfig<StringStatusArrType> {
  getState() {
    return this.status;
  }
}
