// 'effects', 'filters', 'adjust', 'crop', 'resize', 'rotate'
const TOOLS = [
  'effects', 'filters', 'crop', 'resize', 'rotate'
];

// 'clarity', 'edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'noise', 'old_paper', 'posterize', 'radial_blur',
//   'sin_city', 'tilt_shift'
const EFFECTS = [
  'edge_enhance', 'emboss', 'grungy', 'hazy', 'lomo', 'radial_blur', 'sin_city', 'tilt_shift'
];

// 'colorize', 'contrast', 'cross_process', 'glow_sun', 'hdr_effect', 'jarques', 'love', 'old_boot',
//   'orange_peel', 'pin_hole', 'pleasant', 'sepia', 'sun_rise', 'vintage'
const FILTERS = [
  'cross_process', 'glow_sun', 'jarques', 'love', 'old_boot', 'orange_peel', 'pin_hole', 'sepia', 'sun_rise', 'vintage'
];

const CLOUDIMAGE_OPERATIONS = ['crop', 'resize', 'rotate'];

const UPLOADER = {
  filerobotUploadKey: '0cbe9ccc4f164bf8be26bd801d53b132',
  filerobotContainer: 'example',
  hideCloudimageSwitcher: true,
  processWithCloudimage: false,
  uploadWithCloudimageLink: false,
  cloudimageToken: null,
  elementId: null,
  uploadParams: {}
}

export { TOOLS, EFFECTS, FILTERS, UPLOADER, CLOUDIMAGE_OPERATIONS };