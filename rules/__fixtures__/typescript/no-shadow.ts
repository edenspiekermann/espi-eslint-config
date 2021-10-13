enum DisplayType {
  CARDS = 'cards',
  LIST = 'list',
  ICONS = 'icons'
}

export const display: DisplayType = DisplayType.ICONS;

export function toggleType(next = DisplayType): DisplayType {
  const display = next;
  return display;
}
