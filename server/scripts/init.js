const GalleryStore = require('../store/GalleryStore');

const picture = {
  url:
    'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
};

async function initialize() {
  await GalleryStore.initializeDB();
  await GalleryStore.removeDB();
  await GalleryStore.addPicture(picture);
}

try {
  initialize();
} catch (e) {
  console.log(e);
}
