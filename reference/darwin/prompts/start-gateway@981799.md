When on (default), users can upload plugin files and create plugins with Claude. Set to `false` to stop users adding plugins of their own: every in-app option for doing so is hidden, and the app refuses uploads that still reach it.

This is a feature-availability control enforced in the app, not a data boundary: plugins already installed (or placed on disk outside the app) are not removed or blocked by this key. Plugins from organization-provisioned marketplaces and the organization plugins directory are unaffected.

This key applies only while the app runs in third-party mode. If users could otherwise sign in to Claude.ai on the device, also set `disableDeploymentModeChooser` so the app stays in third-party mode.