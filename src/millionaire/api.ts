import { MillionaireConfig } from './types';

export default async function fetchGameConfig() {
  const response = await fetch('/config.json');

  return response.json() as unknown as MillionaireConfig;
}
