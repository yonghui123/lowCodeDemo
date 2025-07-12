import type { defineComponent } from 'vue';
import { SingleSelector } from '../SelectConfig/SingleSelect';
import type {
  SingleOptionEditConfig,
  TextEditConfig,
  StyleEditConfig,
  SizeEditConfig,
  BaseEditConfig,
} from '../EditConfig/BaseEdit';
// 创建类名和对应选择类的映射关系，外部只需要通过类名就可以通过createSelect方法创建对应的选择类
export const selectClassMap = {
  singleSelector: SingleSelector,
  // MultiSelector: MultiSelector,
};

export type SelectType = keyof typeof selectClassMap;

export type EditComStatusMap<K extends keyof any, C extends Record<K, any>> = {
  // 遍历 K 中的每个键 k
  [k in K]: C[k] extends BaseEditConfig<infer T> // 判断 C[k] 是否为 BaseEditConfig 的实例
    ? // 如果是，返回推断出的泛型类型 T
      T
    : // 如果不是，返回 never 类型
      never;
};

export interface BaseEditComType {
  title: TextEditConfig;
  desc: TextEditConfig;
  align: StyleEditConfig;
  titleSize: SizeEditConfig;
  descSize: SizeEditConfig;
  titleWeight: StyleEditConfig;
  descWeight: StyleEditConfig;
  titleItalic: StyleEditConfig;
  descItalic: StyleEditConfig;
  titleColor: TextEditConfig;
  descColor: TextEditConfig;
}
export type BaseEditComKeys = keyof BaseEditComType;
export type BaseEditComStatusMap = EditComStatusMap<BaseEditComKeys, BaseEditComType>;

export interface SingleEditComType extends BaseEditComType {
  options: SingleOptionEditConfig;
}
export type SingleEditComKeys = keyof SingleEditComType;
export type SingleStateType = {
  [key in SingleEditComKeys]: ReturnType<SingleEditComType[typeof key]['getState']>;
};

export type VueComType = ReturnType<typeof defineComponent>;

export type StringStatusArrType = string[];
export type ValueStatusArrType = Array<{
  value: string;
  status: string;
}>;
export type PicTitleStatusArrType = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export type OptionStatusType = StringStatusArrType | ValueStatusArrType | PicTitleStatusArrType;

export type EditStatusType =
  | string
  | StringStatusArrType
  | ValueStatusArrType
  | PicTitleStatusArrType;
