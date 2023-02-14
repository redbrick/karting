# DCU Karting Society Static Site

[![Build & Publish Container](https://github.com/redbrick/karting/actions/workflows/build.yml/badge.svg)](https://github.com/redbrick/karting/actions/workflows/build.yml)

Static files for the DCU Karting Society website.

## Overview

### Adding Events

To add events, modify `src/_data/events.json`. Copy and paste the format of the existing events. If you want two buttons, add text to both `primary_text` and `secondary_text`. If you want one button, add text to `primary_text` and leave `secondary_text` blank.

### Changing the Slides

To change the slides, modify `src/_data/slides.json`. Add a URL to a different image. Try and keep the aspect ratio the same across all slides.

### Adding Images

To add images, add them to `src/img/`. To view them in the site, reference them with `/img` in the HTML.

### Further Questions

If you have any questions, please contact the [Webmaster](mailto:webmaster@redbrick.dcu.ie), [Helpdesk](mailto:helpdesk@redbrick.dcu.ie) or the [Admins](mailto:admins@redbrick.dcu.ie).

## Deployment

This site is built with GitHub Actions into a container. Aperture runs that container and serves the site.

## Installation

```bash
npm install
```

## Running Locally

```bash
npx @11ty/eleventy --serve
```

## Building

```bash
bash bin/build
```

## Development

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Eleventy](https://www.11ty.dev/)
