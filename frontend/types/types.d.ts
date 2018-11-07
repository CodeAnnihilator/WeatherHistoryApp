interface Window {
  initialReduxState: any
}

declare module "*.svg" {
  const content: any;
  export default content;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>