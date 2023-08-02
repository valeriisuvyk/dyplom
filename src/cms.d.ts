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

export interface HomePage_main {
  spotify: string;
  applemusic: string;
  bandcamp: string;
  deezer: string;
  youtube: string;
  soundcloud: any;
}

export interface HomePage {
  docTitle: string;
  header: HomePage_header;
  main: HomePage_main;
}
