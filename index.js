const Jimp = require("jimp");

const ORIGINAL_IMAGE =
  "./1556608.jpg";

const LOGO = "./logo.png";

const LOGO_MARGIN_PERCENTAGE = 5;

const FILENAME = "test.jpg";

const main = async () => {
  const [image, logo] = await Promise.all([
    Jimp.read(ORIGINAL_IMAGE),
    Jimp.read(LOGO)
  ]);

//   logo.resize(image.bitmap.width / 10, Jimp.AUTO);
  image.resize(1500, Jimp.AUTO);

  const xMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;
  const yMargin = (image.bitmap.width * LOGO_MARGIN_PERCENTAGE) / 100;

//   const X = image.bitmap.width - logo.bitmap.width - xMargin;
//   const Y = image.bitmap.height - logo.bitmap.height - yMargin;

  return image.composite(logo, xMargin, yMargin, [
    {
      mode: Jimp.BLEND_SCREEN,
      opacitySource: 0.9,
      opacityDest: 0.9
    }
  ]);
};

main().then(image => image.write(FILENAME));