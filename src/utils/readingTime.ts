export const calculateReadingTime = (text: string): string => {
  const wordsPerMinute = 200;
  const wordCount = text.length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
};