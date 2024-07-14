import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { themes, type PrismTheme } from 'prism-react-renderer';

const baseTheme = themes.vsDark;

const ourTheme = {
  plain: {
    color: '#CCCCCC',
    backgroundColor: '#0a0a0a',
  },
  styles: [
    ...baseTheme.styles,
    {
      types: ['title'],
      style: {
        color: '#569CD6',
        fontWeight: 'bold',
      },
    },
    {
      types: ['property', 'parameter'],
      style: {
        color: '#9CDCFE',
      },
    },
    {
      types: ['script'],
      style: {
        color: '#D4D4D4',
      },
    },
    {
      types: ['boolean', 'arrow', 'atrule', 'tag'],
      style: {
        color: '#a9bc67',
      },
    },
    {
      types: ['number', 'color', 'unit'],
      style: {
        color: '#a9bc67',
      },
    },
    {
      types: ['font-matter'],
      style: {
        color: '#CE9178',
      },
    },
    {
      types: ['keyword', 'rule'],
      style: {
        color: '#9567bd',
      },
    },
    {
      types: ['regex'],
      style: {
        color: '#D16969',
      },
    },
    {
      types: ['maybe-class-name'],
      style: {
        color: '#4EC9B0',
      },
    },
    {
      types: ['constant'],
      style: {
        color: '#4FC1FF',
      },
    },
    {
      types: ['function'],
      style: {
        color: '#e5c08d'
      }
    },
    {
      types: ['comment'],
      style: {
        color: '#666666'
      }
    }
  ],
} satisfies PrismTheme;

const config: Config = {
  title: 'Simulo Docs',
  tagline: 'Welcome to the official Simulo documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Carroted', // Usually your GitHub org/user name.
  projectName: 'simulo_docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'Simulo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'samplesSidebar',
          position: 'left',
          label: 'Samples',
        },
        {
          href: 'https://github.com/Carroted/simulo_docs',
          label: 'Docs Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'API Docs',
              to: '/docs/api/intro',
            },
            {
              label: 'Samples',
              to: '/docs/samples/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/e8hJbV2QTB',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Simulo??',
              href: 'https://simulo.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carroted`,
    },
    prism: {
      theme: ourTheme,
      additionalLanguages: ['lua'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
