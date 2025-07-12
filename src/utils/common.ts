// 提取函数，用于生成可读的序号
export const formatSerialNumber = (num: number) => {
  const displayNum = num + 1;
  return `${displayNum.toString().padStart(2, '0')}`;
};
