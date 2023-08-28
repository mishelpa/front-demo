export declare enum IconName {
  DEFAULT = "DEFAULT",
  DOWNLOAD = "DOWNLOAD",
  UPLOAD = "UPLOAD",
  ARROWUP = "ARROWUP",
  ARROWDOWN = "ARROWDOWN",
  SEARCH = "SEARCH",
  CLOSE = "CLOSE"
}
export interface IIcon {
  name: IconName;
  viewbox: string;
  path: string;
}
