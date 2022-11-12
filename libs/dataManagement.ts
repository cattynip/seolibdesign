import {
  DataObjectBack,
  DataObjectCover,
  DataObjectMiddle,
  IDataObjectKind,
  TArea
} from '@data/data';

interface IDataManagement {
  area: TArea;
}

function dataManagement({
  area
}: IDataManagement): (IDataObjectKind | undefined)[] {
  if (area === 'all') {
    return [DataObjectCover, DataObjectMiddle, DataObjectBack];
  } else {
    return [
      area === 'cover' ? DataObjectCover : undefined,
      area === 'middle' ? DataObjectMiddle : undefined,
      area === 'back' ? DataObjectBack : undefined
    ];
  }
}

export default dataManagement;
