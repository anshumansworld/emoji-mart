import PropTypes from 'prop-types'

const EmojiPropTypes = {
  data: PropTypes.object.isRequired,
  onOver: PropTypes.func,
  onLeave: PropTypes.func,
  onClick: PropTypes.func,
  fallback: PropTypes.func,
  backgroundImageFn: PropTypes.func,
  native: PropTypes.bool,
  forceSize: PropTypes.bool,
  tooltip: PropTypes.bool,
  useButton: PropTypes.bool,
  skin: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  sheetSize: PropTypes.oneOf([16, 20, 32, 64]),
  sheetColumns: PropTypes.number,
  sheetRows: PropTypes.number,
  set: PropTypes.oneOf(['apple', 'google', 'twitter', 'facebook']),
  size: PropTypes.number.isRequired,
  emoji: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
}

const PickerPropTypes = {
  onClick: PropTypes.func,
  onSelect: PropTypes.func,
  onSkinChange: PropTypes.func,
  perLine: PropTypes.number,
  emojiSize: PropTypes.number,
  i18n: PropTypes.object,
  style: PropTypes.object,
  title: PropTypes.string,
  emoji: PropTypes.string,
  color: PropTypes.string,
  set: EmojiPropTypes.set,
  skin: EmojiPropTypes.skin,
  native: PropTypes.bool,
  backgroundImageFn: EmojiPropTypes.backgroundImageFn,
  sheetSize: EmojiPropTypes.sheetSize,
  emojisToShowFilter: PropTypes.func,
  showPreview: PropTypes.bool,
  showSkinTones: PropTypes.bool,
  emojiTooltip: EmojiPropTypes.tooltip,
  useButton: EmojiPropTypes.useButton,
  theme: PropTypes.oneOf(['auto', 'light', 'dark']),
  include: PropTypes.arrayOf(PropTypes.string),
  exclude: PropTypes.arrayOf(PropTypes.string),
  recent: PropTypes.arrayOf(PropTypes.string),
  autoFocus: PropTypes.bool,
  enableFrequentEmojiSort: PropTypes.bool,
  custom: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      short_names: PropTypes.arrayOf(PropTypes.string).isRequired,
      emoticons: PropTypes.arrayOf(PropTypes.string),
      keywords: PropTypes.arrayOf(PropTypes.string),
      imageUrl: PropTypes.string,
      spriteUrl: PropTypes.string,
      sheet_x: PropTypes.number,
      sheet_y: PropTypes.number,
      size: PropTypes.number,
      sheetColumns: PropTypes.number,
      sheetRows: PropTypes.number,
    }),
  ),
  skinEmoji: PropTypes.string,
  notFound: PropTypes.func,
  notFoundEmoji: PropTypes.string,
  icons: PropTypes.object,
  onClearAllClick: PropTypes.func
}

export { EmojiPropTypes, PickerPropTypes }
