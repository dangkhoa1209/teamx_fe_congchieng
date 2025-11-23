import newsScope from '~/data/news/scope.json';
import { checkPermission } from '../utils/permission-check';
export default () => {
  const list = newsScope.filter((item) => checkPermission(item.permission));
  const key = list.map((item) => item.value);
  const getLabel = (value) => {
    const scope = newsScope.filter((item) => item.value === value);
    if (!scope) {
      return '';
    }

    return scope[0].label || '';
  };

  return {
    list: list,
    key: key,
    getLabel,
  };
};
