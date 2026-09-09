import * as fs from 'fs';
import * as path from 'path';

export function readJsonFile<T>(relativePath: string): T {
  const filePath = path.resolve(relativePath);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent) as T;
}