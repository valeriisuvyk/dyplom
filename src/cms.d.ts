/* eslint-disable */
/* tslint:disable */

export interface HomePage_header_nav {
  item1: string;
  item2: string;
  item3: string;
}

export interface HomePage_header {
  logo: string;
  nav: HomePage_header_nav;
  button: string;
}

export interface HomePage_main_music {
  spotify: string;
  itunes: string;
  bandcamp: string;
  deezer: string;
  youtube: string;
  soundcloud: string;
}

export interface HomePage_main_social {
  discord: string;
  reddit: string;
  instagram: string;
  facebook: string;
  twitter: string;
  twitterlogo: string;
}

export interface HomePage_main {
  music: HomePage_main_music;
  social: HomePage_main_social;
}

export interface HomePage {
  docTitle: string;
  header: HomePage_header;
  main: HomePage_main;
}
