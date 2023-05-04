export function isValidKey(
  key: string | number | symbol,
  object: object | any[]
): key is keyof typeof object {
  return key in object;
}
