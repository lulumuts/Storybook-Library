export const DEFAULT_THEME = "light";

import { VApp } from 'vuetify/components';
import { Meta, StoryFn } from '@storybook/vue3';

interface WithVuetifyThemeContext {
  globals?: {
    theme?: string;
  };
}

export const withVuetifyTheme = (
  story: StoryFn<WithVuetifyThemeContext>,
  context: WithVuetifyThemeContext
): Meta => {
  const globalTheme = context.globals?.theme || DEFAULT_THEME;
  
  return {
   ...story(context),
    component: VApp,
    template: `
      <v-app theme="${globalTheme}">
        <div class="d-flex">
        <component :is="BaseStory" />
        </div>
      </v-app>
    `,
  };
};
