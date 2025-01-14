alias c := check
alias cl := changelog
alias wc := watch-check
alias wf := watch-fix
alias wa := watch-all
alias b := build
alias f := fix
alias fc := fix-check
alias d := dev
alias p := preview

dev:
  pnpm dev

build:
  pnpm run build

preview:
  pnpm run preview

changelog:
  pnpm run changelog

check-astro:
  pnpm run astro check

check-eslint:
  pnpm run check:eslint

check-prettier:
  pnpm run check:prettier

fix-eslint:
  pnpm run fix:eslint

fix-prettier:
  pnpm run fix:prettier

fix: fix-eslint fix-prettier

check: check-astro check-eslint check-prettier

fix-check: fix check

watch-check:
  watchexec -e js,css,html,astro,ts just check

watch-fix:
  watchexec -e js,css,html,astro,ts just fix

watch-all:
  watchexec -e js,css,html,astro,ts just fix-check
