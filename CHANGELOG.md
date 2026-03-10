# Changelog

## 0.1.0
- Initial experimental release
- Runtime utility-based styling
- Arbitrary spacing and sizing values
- Responsive behavior without build tools or configuration

## [0.1.1] - 2026-03-10

### Added
- Position utilities: `position-[value]`, `top`, `right`, `bottom`, `left`, `z`
- Typography utilities: `fs`, `fw`, `lh`, `ls`
- Visual utilities: `br`, `op`, `gap`

### Improved
- Added MutationObserver to automatically detect DOM changes

### Performance
- Debounced resize handler to reduce unnecessary recalculations

### Refactor
- Simplified parser routing using grouped prefix arrays