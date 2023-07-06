const mapping: Record<string, string> = {
  publishers: 'publisher',
  stories: 'story',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
