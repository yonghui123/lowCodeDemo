import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export class BaseEdit {
  id: string; // 组件唯一标识
  status: string | string[]; // 组件状态
  defaultStatus: string | string[]; // 默认状态，可选
  currnetStatus?: number; // 当前状态，可选
  isShow: boolean; // 是否显示
  name: string; // 组件名称
  editCom: ReturnType<typeof markRaw>; // editCom 类型为 markRaw 返回值类型
  constructor(name: string, status: string | string[], editCom: ReturnType<typeof markRaw>) {
    this.id = uuidv4();
    this.status = status;
    this.defaultStatus = status;
    this.name = name;
    this.isShow = true;
    this.editCom = editCom;
  }

  setStatus(s: string | string[]) {
    this.status = s;
  }

  resetStatus() {
    this.status = this.defaultStatus;
  }
}
