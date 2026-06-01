#!/usr/bin/env node
// Download character photos from Dark fandom wiki
import { createWriteStream, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, '../public/images/characters');

const images = [
  // Jonas Kahnwald
  { file: 'jonas-young.png',    url: 'https://static.wikia.nocookie.net/dark-netflix/images/a/a6/Jonas_Kahnwald%E2%80%93Profile.png/revision/latest?cb=20220218082957' },
  { file: 'jonas-adult.png',    url: 'https://static.wikia.nocookie.net/dark-netflix/images/5/57/Jonas_Kahnwald-Third_Reality%E2%80%93Profile.png/revision/latest?cb=20220218093603' },
  { file: 'adam.png',           url: 'https://static.wikia.nocookie.net/dark-netflix/images/0/03/Adam%E2%80%93Profile.png/revision/latest?cb=20220219133120' },

  // Martha / Eva
  { file: 'martha-jonas.png',   url: 'https://static.wikia.nocookie.net/dark-netflix/images/1/15/Martha_Nielsen_%28Adam%27s_World%29%E2%80%93Profile.png/revision/latest?cb=20220218140819' },
  { file: 'martha-alt.png',     url: 'https://static.wikia.nocookie.net/dark-netflix/images/7/73/Young_Martha_Nielsen_%28Eva%27s_World%29%E2%80%93Profile.png/revision/latest?cb=20220218073259' },
  { file: 'eva.jpg',            url: 'https://static.wikia.nocookie.net/dark-netflix/images/4/42/Eva_in_contemplation_in_the_HQ.jpg/revision/latest?cb=20201227031836' },

  // Kahnwald
  { file: 'mikkel.png',         url: 'https://static.wikia.nocookie.net/dark-netflix/images/d/d6/Young_Mikkel_Nielsen_%28Adam%27s_World%29%E2%80%93Profile.png/revision/latest?cb=20220218103444' },
  { file: 'michael.png',        url: 'https://static.wikia.nocookie.net/dark-netflix/images/2/28/Michael_2019.png/revision/latest?cb=20200629032320' },
  { file: 'hannah.jpg',         url: 'https://static.wikia.nocookie.net/dark-netflix/images/8/82/Closeup_-_Hannah.jpg/revision/latest?cb=20171227115300' },
  { file: 'ines.jpg',           url: 'https://static.wikia.nocookie.net/dark-netflix/images/8/82/Closeup_-_Ines_1986.jpg/revision/latest?cb=20171227124102' },

  // Nielsen
  { file: 'ulrich-adult.png',   url: 'https://static.wikia.nocookie.net/dark-netflix/images/a/a9/Adult_Ulrich_Nielsen%E2%80%93Profile.png/revision/latest?cb=20220221073746' },
  { file: 'ulrich-young.png',   url: 'https://static.wikia.nocookie.net/dark-netflix/images/f/f0/Ulrich_Nielsen_in_1987.png/revision/latest?cb=20190623160704' },
  { file: 'katharina.jpg',      url: 'https://static.wikia.nocookie.net/dark-netflix/images/0/0c/Katharina_in_1987.jpg/revision/latest?cb=20201215083720' },
  { file: 'magnus.jpg',         url: 'https://static.wikia.nocookie.net/dark-netflix/images/3/34/Closeup_-_Magnus.jpg/revision/latest?cb=20171227115303' },
  { file: 'mads.jpg',           url: 'https://static.wikia.nocookie.net/dark-netflix/images/8/8c/Mads_Nielsen_photo_at_his_1987_funeral.jpg/revision/latest?cb=20201231005148' },
  { file: 'tronte.jpg',         url: 'https://static.wikia.nocookie.net/dark-netflix/images/9/97/Closeup_-_Tronte.jpg/revision/latest?cb=20171227115421' },
  { file: 'agnes.png',          url: 'https://static.wikia.nocookie.net/dark-netflix/images/e/e0/DARK_1x09_AgnesNielsen.png/revision/latest?cb=20200819072912' },

  // Silja
  { file: 'silja-teen.png',     url: 'https://static.wikia.nocookie.net/dark-netflix/images/a/a7/SiljaYoung.png/revision/latest?cb=20230103162544' },
  { file: 'silja-adult.jpg',    url: 'https://static.wikia.nocookie.net/dark-netflix/images/0/08/Silija.jpg/revision/latest?cb=20190624183655' },

  // Doppler
  { file: 'charlotte.jpg',      url: 'https://static.wikia.nocookie.net/dark-netflix/images/1/11/Closeup_-_Charlotte.jpg/revision/latest?cb=20171227115258' },
  { file: 'peter.jpg',          url: 'https://static.wikia.nocookie.net/dark-netflix/images/b/bf/Closeup_-_Peter.jpg/revision/latest?cb=20171227115305' },
  { file: 'franziska.png',      url: 'https://static.wikia.nocookie.net/dark-netflix/images/5/56/Franziska_2019.png/revision/latest?cb=20200629220136' },
  { file: 'elisabeth.jpg',      url: 'https://static.wikia.nocookie.net/dark-netflix/images/f/fb/Elisabeth_in_2020.jpg/revision/latest?cb=20201215091929' },
  { file: 'helge-child.jpg',    url: 'https://static.wikia.nocookie.net/dark-netflix/images/5/5a/Closeup_-_Helge.jpg/revision/latest?cb=20171227115301' },
  { file: 'bernd.jpg',          url: 'https://static.wikia.nocookie.net/dark-netflix/images/a/ad/Closeup_-_Bernd.jpg/revision/latest?cb=20171227115741' },
  { file: 'noah-adult.png',     url: 'https://static.wikia.nocookie.net/dark-netflix/images/f/f9/OlderNoah.png/revision/latest?cb=20230323164240' },
  { file: 'noah-teen.jpg',      url: 'https://static.wikia.nocookie.net/dark-netflix/images/a/a0/Noah_Teen.jpg/revision/latest?cb=20221109165345' },
  { file: 'noah-child.png',     url: 'https://static.wikia.nocookie.net/dark-netflix/images/5/54/Noah-young.PNG/revision/latest?cb=20190622163012' },

  // Tiedemann
  { file: 'claudia.png',        url: 'https://static.wikia.nocookie.net/dark-netflix/images/1/18/Claudia_2019.png/revision/latest?cb=20200629193350' },
  { file: 'egon.png',           url: 'https://static.wikia.nocookie.net/dark-netflix/images/c/c4/Egon_1986.png/revision/latest?cb=20200629215452' },
  { file: 'doris.png',          url: 'https://static.wikia.nocookie.net/dark-netflix/images/3/37/DARK_1x09_DorisTiedemann.png/revision/latest?cb=20200819093647' },
  { file: 'regina.png',         url: 'https://static.wikia.nocookie.net/dark-netflix/images/c/c3/Regina_2019.png/revision/latest?cb=20200629192734' },
  { file: 'aleksander.png',     url: 'https://static.wikia.nocookie.net/dark-netflix/images/1/11/Aleksander_2019.png/revision/latest?cb=20200629192348' },
  { file: 'bartosz.jpg',        url: 'https://static.wikia.nocookie.net/dark-netflix/images/3/3a/Closeup_-_Bartosz.jpg/revision/latest?cb=20171227115258' },
  { file: 'tannhaus.jpg',       url: 'https://static.wikia.nocookie.net/dark-netflix/images/c/cc/Closeup_-_Tannhaus.jpg/revision/latest?cb=20171227115306' },
];

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; DarkWikiBot/1.0)' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  await pipeline(res.body, createWriteStream(dest));
}

let ok = 0, fail = 0;
for (const { file, url } of images) {
  const dest = path.join(OUT_DIR, file);
  if (existsSync(dest)) { console.log(`  skip  ${file}`); ok++; continue; }
  try {
    process.stdout.write(`  dl    ${file} … `);
    await download(url, dest);
    console.log('✓');
    ok++;
  } catch (e) {
    console.log(`✗ ${e.message}`);
    fail++;
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed`);
