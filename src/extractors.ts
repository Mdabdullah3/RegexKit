export const extractHashtags = (text: string): string[] =>
  [...text.matchAll(/#\w+/g)].map((match) => match[0]);

export const extractMentions = (text: string): string[] =>
  [...text.matchAll(/@\w+/g)].map((match) => match[0]);

export const extractNumbers = (text: string): string[] =>
  [...text.matchAll(/\b\d+(\.\d+)?\b/g)].map((match) => match[0]);
