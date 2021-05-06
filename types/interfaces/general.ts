export interface Action<T, K> {
  type: T;
  payload?: K;
}
