import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export function getAllPosts() {
  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
}

export function getLatestPosts(n: number = 3) {
  return getAllPosts().slice(0, n);
}
