import sharp from 'sharp';

await sharp('imagens/voluntarios-acao-social.png')
  .resize({ width: 960, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile('imagens/voluntarios-acao-social.webp');
