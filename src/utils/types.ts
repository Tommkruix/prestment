export enum BROWSER_MODE {
  desktop,
  mobile,
}

export enum PROFILE_DIRECTION {
  horizontal,
  vertical,
}

export type NavMenuType = string;

export type FooterListType = {
  title: string;
  rightLabel?: string;
};

export type AboutNumberType = {
  title: string;
  count: string;
};

export type ProfileType = {
  image: string;
  name: string;
  position: string;
};

export type BlogType = {
  title: string;
  titleHighlight: string;
  description: string;
};

export type BlogDataType = {
  blogs: BlogType[];
  aboutNumbers: AboutNumberType[];
  profile: ProfileType[];
  menus: NavMenuType[];
};
