const brandImages: Array<[RegExp, string]> = [
  [/html/, "/tech/html5.svg"],
  [/css/, "/tech/css3.svg"],
  [/javascript|es6/, "/tech/javascript.svg"],
  [/react/, "/tech/react.svg"],
  [/next/, "/tech/nextjs.svg"],
  [/bootstrap/, "/tech/bootstrap.svg"],
  [/tailwind/, "/tech/tailwindcss.svg"],
  [/^git$/, "/tech/git.svg"],
  [/github/, "/tech/github.svg"],
  [/figma/, "/tech/figma.svg"],
  [/vs code|vscode/, "/tech/vscode.svg"],
  [/vercel/, "/tech/vercel.svg"],
];

export function techImage(name: string): string | null {
  const normalized = name.toLowerCase();
  for (const [pattern, path] of brandImages) {
    if (pattern.test(normalized)) return path;
  }
  return null;
}