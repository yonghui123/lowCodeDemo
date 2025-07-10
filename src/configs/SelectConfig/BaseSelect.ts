import { markRaw } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { type BaseEdit } from '../EditConfig/BaseEdit';

// 定义 BaseSelect 类
export class BaseSelect {
  type: ReturnType<typeof markRaw>; // type 类型为 markRaw 返回值类型
  name: string; // 类的名称属性
  id: string; // 类的唯一标识属性
  editComs: Record<string, BaseEdit> = {};

  // 构造函数，初始化类的属性
  constructor(typeComponent: any, name: string) {
    this.type = markRaw(typeComponent); // 使用 markRaw 处理传入的组件
    this.name = name; // 初始化名称
    this.id = uuidv4(); // 使用 uuidv4 生成唯一标识
  }

  setEditComStatus(name: string, status: string | string[]) {
    this.editComs[name].setStatus(status);
  }

  resetEditStatusWithName(name: string) {
    this.editComs[name].resetStatus();
  }

  resetAllEditStatus() {
    let keys: string[] = Object.keys(this.editComs) as string[];
    keys.forEach((key) => {
      this.editComs[key].resetStatus();
    });
  }
}
