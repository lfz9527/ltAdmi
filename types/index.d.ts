declare type Recordable<T = any> = Record<string, T>

/**
 * 该函数定义了一个泛型接口Fn，
 * 它有一个类型参数T默认为any，另一个类型参数R默认为T。
 * 接口有一个函数类型的属性，
 * 该函数可以接受多个类型为T的参数，返回值类型为R。
 */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
