/* eslint-disable */
/* tslint:disable */

export interface Tatreal_header_nav {
  item1: string;
  item2: string;
  item3: string;
}

export interface Tatreal_header {
  logo: string;
  nav: Tatreal_header_nav;
  button: string;
}

export interface Tatreal_main_music {
  spotify: string;
  itunes: string;
  bandcamp: string;
  deezer: string;
  youtube: string;
  soundcloud: string;
}

export interface Tatreal_main_social {
  discord: string;
  reddit: string;
  instagram: string;
  facebook: string;
  twitter: string;
  twitterlogo: string;
}

export interface Tatreal_main {
  music: Tatreal_main_music;
  social: Tatreal_main_social;
}

export interface Tatreal {
  docTitle: string;
  header: Tatreal_header;
  main: Tatreal_main;
}
