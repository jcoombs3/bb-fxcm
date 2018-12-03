# Backbase Theme

The Official Theme for Backbase Projects

## Theme Development Quickstart Guide

By default, the theme includes the full bundle, which includes v2 and v3 styles:

### For V3 Projects only:

To keep your theme more light weight, remove/comment-out the importing of v2 styles
```scss
//Inside main.scss

//==================================
// Whitelabel/Backbase Theme Loader
//==================================
@import "vendor/whitelabel/whitelabel";
// @import "vendor/whitelabel-wc2/whitelabel-wc2"; <-- Comment/Remove
@import 'vendor/backbase/backbase';
// @import "vendor/whitelabel-wc2/backbase-wc2";   <-- Comment/Remove
```

As a result, your theme will be v3 only. 