import {
  selectClassMap,
  type SelectType,
  type SelectInstanceType,
  type EditStatusType,
  type SelectEditKeyType,
  type SelectEditStatusType,
} from '../ConfigTypes/selector.d';
import { BaseSelect } from '../SelectConfig/BaseSelect';

// 筛选项管理类，单例类
class MaterialSelectManager {
  // 使用静态属性存储唯一实例，并显式指定类型
  private static _instance: MaterialSelectManager | null = null;
  private selectMap: Map<SelectType, SelectInstanceType> = new Map();

  // 私有构造函数，防止外部直接实例化
  private constructor() {}

  // 静态 getter 方法，用于获取唯一实例
  public static get instance() {
    if (!MaterialSelectManager._instance) {
      MaterialSelectManager._instance = new MaterialSelectManager();
    }
    return MaterialSelectManager._instance;
  }

  // 管理类要有的方法：
  // 1. 根据名字初始化的方法,可以初始化一个，也可以初始化一组
  public createSelects(names: SelectType[]) {
    return names.map((name) => {
      return this.createSelect(name);
    });
  }
  public createSelect(name: SelectType): SelectInstanceType {
    const Selector = selectClassMap[name];
    const select = new Selector();
    select.name = name;
    this.selectMap.set(name, select);
    return select;
  }

  // 2. 根据名字获取的方法,可以获取一个，也可以获取一组
  public getSelects(names: SelectType[]) {
    return names.map((name) => {
      return this.getSelect(name);
    });
  }
  public getSelect(name: SelectType) {
    return this.selectMap.get(name) || null;
  }

  // 删除筛选项的方法
  public removeSelects(names: SelectType[]) {
    names.forEach((name) => {
      this.removeSelect(name);
    });
  }
  public removeSelect(name: SelectType) {
    this.selectMap.delete(name);
  }

  // 3. 重置筛选项的方法
  public resetSelects(names: SelectType[]) {
    names.forEach((name) => {
      this.resetSelect(name);
    });
  }
  public resetSelect(name: SelectType) {
    const select = this.getSelect(name);
    if (select) {
      select.resetAllEditStatus();
    }
  }

  public setSelectEditStatus(
    selectName: SelectType,
    editName: SelectEditKeyType,
    status: SelectEditStatusType,
  ) {
    const select = this.getSelect(selectName);
    console.log('select: ', select);
    if (select) {
      // @ts-ignore
      select.setEditComStatus(editName, status);
    }
  }
}

export default MaterialSelectManager.instance;
