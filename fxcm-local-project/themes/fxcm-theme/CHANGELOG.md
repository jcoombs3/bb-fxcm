# Changelog
All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

More info: https://keepachangelog.com/en/1.0.0/

## [1.31.1]

### Fixed

* Fixed active state and accessibility styling on Product Selector

## [1.31.0]

### Added

* Added styles for Product Item
* Enabled support for using box-shadows
* Updated default font-weight "bold" to 500
* Added styles for Product Item `bb-product-item-credit-card-ui`
* Added styles for Product Item `bb-product-item-savings-account-ui`
* Added styles for Product Item `bb-product-item-term-deposit-ui`
* Added styles for Product Item `bb-product-item-loan-ui`
* Added styles for Product Item `bb-product-item-investment-account-ui`
* Added styles for Product Item `bb-product-item-debit-card-ui`
* Added styles for Product Item `bb-product-item-current-account-ui`
* Added styles for Product Item `bb-product-item-basic-account-ui`
* Updated bb-icon-ui display to inline-flex from flex
* Added styles for Message component `bb-message-ui`

### Fixed

* Set opposite `border-radius` to 0 in `input-group-prepend` and `input-group-append` classes
* Removed media-breakpoint behaviors for `.rb-sidebar` that were collapses and truncates content in sidebar-web.soy
* Fixed width styling and `md` breakpoint behavior (compact mode) for newly introduced `.soy-template` class on page-layout `.rb-sidebar`, which originally causes overlaps on content area

## [1.30.2]

### Fixed

* Set `bb-badge-ui` component to flex
* Set `bb-button-ui` component to grow
* Set `bb-input-checkbox-ui` component to use $checkbox-outline for focus outline
* Set all buttons to show no webkit appearence border

## [1.30.1]

### Fixed

* Fix `statements` icon in bicon icon set

## [1.30.0]

### Added
* css variable for benchmark chart color
* override ngx-chart styles within `bb-portfolio-summary-charts' component
* ng-invalid with ng-touched parent sets child input and select borders to red

### Fixed

* For `bb-card-vendor-ui`, the VISA logo is changed to white because it is used
  on a dark background
* Hide default icon in IE for `bb-dropdown-single-select`
* Set outline on `bb-input-checkbox` focus to 2px.
* Default `bb-loading-indicator-path` dash array and offset for IE usage.
* Center `bb-icon-ui`
* For `bb-input-checkbox-ui`, allows resizing of checkbox based on parent component text size.
* Fix the height issue of `rb-sidebar` in ie11 and firefox
* Added missing icons to bicon map
    * accounts
    * transactions
    * credit-cards
    * debit-cards
    * quick-action
    * statements
    * unexpected

## [1.29.2]

### Fixed

* Removed border and icon color for `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes

## [1.29.1]

### Added

* New vendor folder for universal WC3. 'backbase-universal-3'
* Add styles for layout flex container
* Add styles for navigation link tree widget
* Add styles for set locale widget.
* All the rules added for universal WC3 in:
  * vendor/backbase/layouts/\_navigation.scss
  * vendor/backbase/layouts/\_page.scss

### Removed

* Removed the only file related to a widget from universal WC3 as well as its reference.
  * vendor/backbase/templates/\_set-locale-widget.scss
  * vendor/backbase/templates/templates.scss

### Fixed

* Update background color of sidebar for `page-flex-layout`

## [1.29.0]

### Added

* Added `bb-loading-indicator` class
* Added `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes
* Added `bb-input-checkbox` class
* Added `bicon-arrow-in` and `bicon-arrow-out` icons
* Added business banking categories definitions
* Expose spending/income categories colors
* Add `.pre-scrollable-typeahead` to manage scrollable typeahead dropdown menu

### Removed

* Added `bb-loading-indicator` class
* Added `bb-dropdown-single-select` and `bb-dropdown-single-select-icon` classes
* Added `bb-input-checkbox` class

### Fixed

* Created classes for icons and sizing of icons according to Backbase design system
* CSS variables with colors and for each transaction category (per category and combined)
* Donut chart container minimum height and increased size modifiers
* Add `.pre-scrollable-typeahead` to manage scrollable typeahead dropdown menu
* Added `bicon-arrow-in` and `bicon-arrow-out` icons
* Added business banking categories definitions
* Expose spending/income categories colors
* Expose spending/income categories icon content
* Expose chart's tooltip arrow size
* Badge styling fixed (uppercase transform)
* Overrided default hover color for `.heading-tabs`

## [1.28.0]

### Added

* Update README with basic usage of theme wc2 & wc3 stylings
* Separate wc2 & wc3 styling to allow for cleaner inclusion/exclusion inside `main.scss`
* Add lock icon and fallback for whitelabel
* Set of transaction category label classes `bb-transaction-category-label-{CATEGORY}`. Can be used to apply category's color to the element
* Material icons for `.bicon-user`, `.bicon-unexpected` and `.bicon-add-outline`
* Changes for Contact details modal
* `bb-logo-emblem` and `bb-logo-inverse` modifiers for the `bb-logo` class
* `bb-logo-responsive` modifier which makes it 100% width
* `bb-card-vendor` class with modifiers for mastercard, visa and visa-debit
* `bb-payment-card` class
* Font icon size xxl for biggest icons available
* Specific styles for `ext-bus-favorite-accounts-lite-ng` extension.
* Add scrolling for box layout `scrollable-box-content` and tab layout `scrollable-tab-content`
* Add styles for box layout to support fluid image content `fluid-image-box-layout`

### Fixed

* `nav-item` styles updated to match new designs
* Use backbase font size in input variables
* Replace error icon to use exclamation triangle instead of circle
* Override ngx-chart legend wrong width for turnovers, on safari browser
* Donut chart size is reduced. Chart's slice icons and values font size is increased
* Font icon size for xl has been reduced, there was too many gap between lg.

## [1.27.0]

### Added

* Added `npm run build` to transpile sass and minify output to css/ directory (for distribution of source and minified theme, together)
* Restructured theme file structure (removed /theme folder; un-nest /theme/styles as /scss at root level)
* Officially renamed package.json's project name to '@backbase/backbase-theme'
* Manual bump of package.json's project version (delegating 1.26.0 --> 1.27.0)
* Removed settings.gradle

## [1.25.2]

### Added

* override ngx-chart styles within `bb-turnovers-bar-chart` component

## [1.25.1]

### Added

* Material icons for `.bicon-loading` and `.bicon-ellipsis-h`

### Fixed

* Apply `navbar` link styles when parent is `.nav-item`
* Apply new styles for `nav-item` inactive, active and hover state

## [1.25.0]

### Changed

* `.bicon-download` icon content

### Fixed

* Remove vertical padding in account selector button

### Added

* `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-xl` icon class
* Added `.top-side-navigation-layout` namespace to add some styles only applicable within this namespace.

## [1.24.0]

### Added

* Added `.card-scrollable-x` class so account cards can be scrollable by horizontal
* Added `.ext-bus-favorite-accounts-ng` class for cards in ext-bus-favorite-accounts-ng and ext-bus-accounts-overview-ng
* Added `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-xl` icon class
* `.button-toolbar` class to manage responsiveness on payment form buttons
* Selected dropdown item icon in dropdown list
* Added `.bicon-autorenew` icon class

### Changed

* `.bicon-download` icon content
* Removed some specificity regarding navigation that added complexity to the system

### Fixed

* Remove vertical padding in account selector button
* Modified styling for switcher component

## [1.23.0]

### Added

* Added input-group customizations
* Added calendar popup component styles

## [1.22.0]

### Added

* Added `.bicon-lg` modifier class for large icons
* Added `.bicon-current-accounts`, `.bicon-savings-accounts`, `.bicon-term-deposits`, `.bicon-credit-cards`, `.bicon-debit-cards`, `.bicon-loans` and `.bicon-investment-accounts` icon classes for product kinds
* Added contextual classes for `ui-bb-account-card-ng` component (bb-account-card-primary, bb-account-card-success, ...)
* `.ext-bb-product-summary-overview-ng` styles are applied to `.ext-bb-product-summary-ng` as well

### Changed

* Removed styles from `.ext-bb-product-summary-overview-ng` that are applied directly to the account card component

## [1.21.0]

### Added

* Added `.page-heading-wrapped .heading-wrapper` class that allows adding some padding to the page heading content

## [1.20.2]

### Fixed

* Change active state to use .active instead of .focus for button group toggle

## [1.20.1]

### Fixed

* Budget card width

## Added

* Added `.bicon-download`, `.bicon-caret-up`, ,`bicon-caret-down` icon classes

## [1.15.0]

### Added

* Removed spacing class `.pb-100p` and `.pb-25p`
  (\_spacing.scss)
* Added loop to autogenerate class `.pb-5p` to `.pb-100p` with a step of 5
  (\_spacing.scss)
* Added `.bicon-edit` icon class

## [1.14.0]

### Added

* Added utility class .pb-25p to creating proportion for height to be 1/4 the width
* Added `.bicon-note-add`, `.bicon-edit`, `.bicon-print` and `.bicon-add-a-photo` icon classes

## [1.11.2]

### Added

* Added utility class .pb-100p for square layouts (\_spacing.scss)

## [1.9.1]

### Added

* CHANGELOG.md

### Changed

* Bumped version from 1.9.0 to 1.9.1 in package.json (model.xml auto-handled by jenkins)
* Updated under-the-hood whitelabel theme to latest 1.13.0
* Moved old variables to variables-legacy (imported within `vendor/backbase/helpers/helpers`)

### Fixed

* Improved custom theme load-order to correctly override vendor themes
