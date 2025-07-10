// 筛选项管理类，单例类
class SelectManager {
  // 使用静态属性存储唯一实例，并显式指定类型
  private static _instance: SelectManager | null = null;
  private selectMap = new Map();

  // 私有构造函数，防止外部直接实例化
  private constructor() {}

  // 静态 getter 方法，用于获取唯一实例
  public static get instance() {
    if (!SelectManager._instance) {
      SelectManager._instance = new SelectManager();
    }
    return SelectManager._instance;
  }

  // 管理类要有的方法：
  // 1. 根据名字初始化的方法,可以初始化一个，也可以初始化一组
  public createSelects(names: string[]) {
    names.forEach((name) => {
      this.createSelect(name);
    });
    // const select = new SingleSelector();
    // select.name = name;
    // this.selectMap.set(name, select);
  }
  public createSelect(name: string) {
    // const select = new SingleSelector();
    // select.name = name;
    // this.selectMap.set(name, select);
  }

  // 2. 根据名字获取的方法,可以获取一个，也可以获取一组
  public getSelects(names: string[]) {
    return names.map((name) => {
      return this.getSelect(name);
    });
  }
  public getSelect(name: string) {
    return this.selectMap.get(name) || null;
  }

  // 删除筛选项的方法
  public removeSelects(names: string[]) {
    names.forEach((name) => {
      this.removeSelect(name);
    });
  }
  public removeSelect(name: string) {
    this.selectMap.delete(name);
  }

  // 3. 重置筛选项的方法
  public resetSelects(names: string[]) {
    names.forEach((name) => {
      this.resetSelect(name);
    });
  }
  public resetSelect(name: string) {
    const select = this.getSelect(name);
    if (select) {
      select.resetAllEditStatus();
    }
  }
}
