# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
- AJAX
  - Support all HTTP request methods.
  - API
    - Support event handlers with `on`.
    - Copy some of the Fetch API capabilities
      - If there is a form, **force** it to be in the `form` object (N.B.: fetch() uses `body`). DO NOT do this for the `forms-only` branch.
      - Support headers.
    - Support responseType
    - If NDJSON is wanted as a Response type, provide a default parser.
    - Always return a Promise (default the method to `GET`).

## [0.2.1][0.2.1] - 2018-01-28
### Added
- Utils
  - Template literal
  - Random integer

### Fixed
- Consistency in the first lines of the files
- Some spelling errors.
- Linting

## [0.2.0][0.2.0] - 2017-11-13
### Added
- AJAX
  - Now works in workers (NOT TESTED)
- CHANGELOG.md
- README.md
- Copyright

### Fixed
- AJAX
  - HTTP success status is in the 200 ~ 299 range, not only 200.
  - Code formatting.
  - API
    - Uppercase the method parameter.

## [0.1.1][0.1.1] - 2017-11-08
### Fixed
- AJAX
  - The URL parameter was almost never correctly handled.

## [0.1.0][0.1.0] - 2017-11-08 [YANKED]
### Added
- lae.ajax (see the [AJAX section of the README][readme-ajax])

[readme-ajax]: <README.md#ajax> (How to use -> AJAX)

## [0.0.1][0.0.1] - 2015-08-30
### Added
- A simple library to use convoluted JavaScript functions. No code is actually released.
- Idea: AJAX (XMLHttpRequest)
- Idea: Canvas
- Idea: XPath


[0.0.1]: <https://github.com/Phoenix35/lae/commit/08b90f67386702ee359befa9d7d2c34867fa82b9> (First commit)
[0.1.0]: <https://github.com/Phoenix35/lae/commit/6d181f6b5fcf2566330c1347c49661eef4e29925> (First actual code)
[0.1.1]: <https://github.com/Phoenix35/lae/commit/34912c2031988a0063935b67f45e01de30cf3b67>
[0.2.0]: <https://github.com/Phoenix35/lae/tree/master>

---
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).
