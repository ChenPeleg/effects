import { MatchPathService } from "../services/matchPathService";
import { readable, derived } from "svelte/store";

let regex = /(#?[^?]*)?(\?.*)?/;

function parse() {
  let match = regex.exec(window.location.hash);
  let pathname = match[1] || "#/";
  let querystring = match[2];
  return { pathname, querystring };
}

let path = readable(parse(), (set) => {
  let update = () => set(parse());
  window.addEventListener("hashchange", update);
  return () => window.removeEventListener("hashchange", update);
});

// @ts-ignore
let pathname = derived(path, ($) => $.pathname); // current pathname without query

const makePathStore = () => {
  const { subscribe } = pathname;
  const match = MatchPathService.match;
  return { subscribe, match };
};

let pathStore = makePathStore();

// @ts-ignore
let querystring = derived(path, ($) => $.querystring);
let query = derived(querystring, ($) => {
  return Array.from(new URLSearchParams($)).reduce((a, [i, e]) => {
    a[i] = e;
    return a;
  }, {});
});

export { pathname, query, pathStore };
