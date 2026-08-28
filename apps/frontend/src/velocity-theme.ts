import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const VOLT_ACCENT_SCALE = {
  0: '#ffffff',
  50: '#fbffe8',
  100: '#f5ffc4',
  200: '#ecff9c',
  300: '#e4ff6b',
  400: '#d6ff3e',
  500: '#c2f214',
  600: '#a3cf0c',
  700: '#7d9f0e',
  800: '#627c13',
  900: '#516916',
  950: '#2b3b06',
};

const INK_SURFACE_SCALE = {
  0: '#ffffff',
  50: '#f6f6f7',
  100: '#e8e8ea',
  200: '#cfcfd3',
  300: '#a8a8ae',
  400: '#7c7c84',
  500: '#5b5b62',
  600: '#45454b',
  700: '#34343a',
  800: '#26262b',
  900: '#17171a',
  950: '#0b0b0c',
};

export const VelocityTheme = definePreset(Aura, {
  primitive: {
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '2px',
      md: '4px',
      lg: '4px',
      xl: '6px',
    },
  },
  semantic: {
    primary: VOLT_ACCENT_SCALE,
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.400}',
      offset: '2px',
    },
    formField: {
      paddingX: '0.875rem',
      paddingY: '0.75rem',
      borderRadius: '{border.radius.md}',
    },
    colorScheme: {
      light: {
        surface: INK_SURFACE_SCALE,
      },
      dark: {
        primary: {
          color: '{primary.400}',
          contrastColor: '#0b0b0c',
          hoverColor: '{primary.300}',
          activeColor: '{primary.500}',
        },
        highlight: {
          background: 'rgba(214, 255, 62, 0.14)',
          focusBackground: 'rgba(214, 255, 62, 0.22)',
          color: '{primary.300}',
          focusColor: '{primary.200}',
        },
        surface: INK_SURFACE_SCALE,
        content: {
          background: '{surface.900}',
          borderColor: 'rgba(255, 255, 255, 0.09)',
        },
        overlay: {
          select: { background: '{surface.900}', borderColor: 'rgba(255, 255, 255, 0.12)' },
          popover: { background: '{surface.900}', borderColor: 'rgba(255, 255, 255, 0.12)' },
          modal: { background: '{surface.900}', borderColor: 'rgba(255, 255, 255, 0.12)' },
        },
        formField: {
          background: '{surface.950}',
          borderColor: 'rgba(255, 255, 255, 0.14)',
          hoverBorderColor: 'rgba(255, 255, 255, 0.28)',
          focusBorderColor: '{primary.400}',
          color: '{surface.0}',
          placeholderColor: '{surface.400}',
        },
        text: {
          color: '#fafafa',
          mutedColor: '#a1a1a6',
        },
      },
    },
  },
});
