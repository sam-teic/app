export interface ThemeColors {
  background: string;
  surface: string;
  surfaceAlt: string;
  surfaceSolid: string;
  textMain: string;
  textSub: string;
  primary: string;
  border: string;
  borderLight: string;
  headerBg: string;
  transparentOverlay: string;
  pillBg: string;
  iconBgLight: string;
  iconBgSubtle: string;
  iconBgWhite: string;
}

export const lightColors: ThemeColors = {
  background: '#F7F6F8',
  surface: '#FFFFFF',
  surfaceAlt: 'rgba(255,255,255,0.7)',
  surfaceSolid: 'rgba(255,255,255,0.95)',
  textMain: '#191c1e',
  textSub: '#5f5e5e',
  primary: '#F70003',
  border: 'rgba(0,0,0,0.08)',
  borderLight: 'rgba(255,255,255,0.8)',
  headerBg: 'rgba(255,255,255,0.4)',
  transparentOverlay: 'rgba(25,28,30,0.4)',
  pillBg: 'rgba(188,0,1,0.05)',
  iconBgLight: 'rgba(255,218,212,0.3)',
  iconBgSubtle: 'rgba(247,0,3,0.06)',
  iconBgWhite: 'rgba(255,255,255,0.2)',
};

export const darkColors: ThemeColors = {
  background: '#121212',
  surface: '#1E1E1E',
  surfaceAlt: 'rgba(255,255,255,0.05)',
  surfaceSolid: '#1E1E1E',
  textMain: '#FFFFFF',
  textSub: '#A0A0A0',
  primary: '#F70003',
  border: 'rgba(255,255,255,0.1)',
  borderLight: 'rgba(255,255,255,0.1)',
  headerBg: 'rgba(18,18,18,0.7)',
  transparentOverlay: 'rgba(0,0,0,0.7)',
  pillBg: 'rgba(247,0,3,0.15)',
  iconBgLight: 'rgba(247,0,3,0.15)',
  iconBgSubtle: 'rgba(247,0,3,0.15)',
  iconBgWhite: 'rgba(255,255,255,0.15)',
};
