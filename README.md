# Wan Dang Portfolio

This repository contains my Quarto-based portfolio site.

## Local Development

Render the site:

```bash
quarto render
```

Preview the site locally:

```bash
quarto preview
```

## Deployment

Pushing to the `v4` branch triggers the GitHub Actions workflow in `.github/workflows/publish.yml`.

Deployment layout:

- `v4` contains the Quarto source files (`.qmd`, `_quarto.yml`, assets, and `_freeze`).
- `gh-pages` contains the rendered HTML site that GitHub Pages serves.

GitHub Pages should therefore publish from:

- branch: `gh-pages`
- folder: `/ (root)`

The `v4` branch is not a directly publishable website branch because the rendered `_site/` output is not committed there.

## Archive

The previous content source is preserved in `archive/quartz-content/`.
