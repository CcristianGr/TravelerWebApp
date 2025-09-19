
export type ParamsPintar = {
  isHome: number;
  text: string;
}

export type HeaderParams = {
  labelS?: string;
  labelB: string;
  labelM?: string;
  button: number;
  rem: string;
};

export type HeaderProps = {
  params: HeaderParams;
};