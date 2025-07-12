import type {
  PicTitleStatusArrType,
  StringStatusArrType,
  ValueStatusArrType,
  VueComType,
} from './selector';

export interface BaseOptionCom {
  id: string;
  isShow: boolean;
  name: string;
  editCom: VueComType;
}

export interface TextOptionCom extends BaseOptionCom {
  status: string;
}

export interface ListOptions extends BaseOptionCom {
  status: StringStatusArrType | ValueStatusArrType | PicTitleStatusArrType;
  currentStatus: number;
}
