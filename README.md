# Hackastro

> [!WARNING]
> This repo is under developing, please don't use this before the first release.

## ❓Why build this

I was laid off on January 7th 2025.

I felt bad at first for a while,
then I realized it was an opportunity for me to build something for myself.
I finally got the time to build a personal website😻.

That's why I create this, I want a website that can contain my blogs and also can be presented as my resume.
Considering this as a gift to someone who may experienced the same and a guide or demo repo for Astro.

Besides that, I want it also support Google adsense, and maybe good affiliate supports.

## ⭐ Features

- [x] Powered by [Astro 5.0](https://astro.build/blog/astro-5/)
- [x] Integrated a featured comment system with [Waline](https://waline.js.org/)
- [x] Implement following [Gitmoji Commit Workflow](https://github.com/arvinxx/gitmoji-commit-workflow)
- [x] Use [Just](https://github.com/casey/just) for cross-platform command runner.
- [x] Git hooks managed by [Husky](https://github.com/typicode/husky)
- [x] Well lint and format by Eslint, stylelint, prettier.
- [x] Integrated with [astro-seo](https://github.com/jonasmerlin/astro-seo#readme), [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/#i18n), [astro-robots-txt](https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme), and more. (check out package.json for details)
- [x] i18n and multilanguages supports. And a language change switcher.
- [x] [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/) and [swup](https://swup.js.org/integrations/astro/) for UI.

## 🚀Setup

- Run `pnpm install` to install packages.
- Install commitizen and its gitmoji plugin:

  ```shell
  pipx install commitizen cz-conventional-gitmoji
  pipx inject commitizen cz-conventional-gitmoji
  ```

  Then you can commit your changes with `cz -n cz_gitmoji c`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `just dev`          | Starts local dev server at `localhost:4321`      |
| `just check`        | Run all the checks                               |
| `just build`        | Build your production site to `./dist/`          |
| `just preview`      | Preview your build locally, before deploying     |
| `just astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `just astro --help` | Get help using the Astro CLI                     |
| `just -l`           | Get all the `just commands`                      |

## 🙏Thanks

- [Frosti](https://github.com/EveSunMaple/Frosti)
