import { INTERNALICON } from '../constants/namesIcon';
import { COLORS } from '../constants/colors';

export function getRandomColors(): string {
  return COLORS[Math.round(Math.random() * COLORS.length)];
}

export function getRandomInternalIcon(): string {
  return INTERNALICON[Math.round(Math.random() * INTERNALICON.length)];
}
