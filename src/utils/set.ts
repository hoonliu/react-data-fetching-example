const set = <Entity = any, Output = Entity, Value = any>(
  entity: Entity,
  path: Array<string | number | symbol>,
  value: Value
) => {
  if (path.length === 0) {
    return value;
  }
  const [key, ...restPath] = path;

  let clone;
  if (!entity && typeof key === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = [...entity];
  } else {
    clone = { ...entity };
  }

  clone[key] = set(clone[key], restPath, value);

  return clone as Output;
};

export default set;
