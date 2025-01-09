alias c := check
alias d := dev
dev:
  pnpm dev

check-astro:
  pnpm run astro check

check: check-astro
