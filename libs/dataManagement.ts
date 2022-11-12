import DataObject, { TArea, TDataType } from '@data/data';

interface IDataManagement {
  area: TArea;
  dataType?: TDataType;
}

function dataManagement({ area, dataType }: IDataManagement) {
  if (area === 'all') {
    return DataObject;
  } else if (!dataType) {
    return DataObject[area];
  } else {
    return DataObject[area][dataType];
  }
}

export default dataManagement;
