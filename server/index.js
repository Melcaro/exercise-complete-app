const express = require('express');
const GalleryStore = require('./store/GalleryStore');

const app = express();

app.get('/api/v1/gallery', async (req, res) => {
  const result = await GalleryStore.getGallery();
  res.send(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`serveur launched on ${PORT}`));
