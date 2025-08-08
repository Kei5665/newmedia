export const BASE_PATH = '/media';

// クライアント/サーバの両方で使える basePath 付与ヘルパー
export function withBasePath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  // 既に basePath が付与されている場合は重複させない
  if (path.startsWith(BASE_PATH + '/')) return path;
  if (path.startsWith('/')) return `${BASE_PATH}${path}`;
  return `${BASE_PATH}/${path}`;
}


