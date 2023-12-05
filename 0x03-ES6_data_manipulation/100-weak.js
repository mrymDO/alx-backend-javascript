export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count + 1);

  if (count >= 4) {
    throw new Error('Endpoint load is high');
  }

  return count + 1;
}
