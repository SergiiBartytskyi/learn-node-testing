import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';
// !       readFile

//? ---------- sync -----------
// import * as fs from 'node:fs';

// fs.readFile('./src/text.txt', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

//? ---------- callback -----------

// import * as fs from 'node:fs/promises';

// fs.readFile('./src/text.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

//? ---------- async -----------

// import * as fs from 'node:fs/promises';

// const func = async () => {
//   const filepath = './src/text.txt';
//   const buffer = await fs.readFile(filepath);
//   console.log('buffer ', buffer);
//   // ******* розкодування за допомогою toString() *************
//   const text = buffer.toString();
//   console.log('encoding with toString ', text);

//   // ******* розкодування за допомогою методу кодування *************

//   const textUTF = await fs.readFile(filepath, 'utf-8');
//   console.log('encoding with UTF ', textUTF);
// };

// func();

//? ---------- async with Detect-----------

// import * as fs from 'node:fs/promises';

// const func = async () => {
//   const filepath = './src/text.txt';
//   const { encoding } = await DetectFileEncodingAndLanguage(filepath);
//   console.log('fileData ', encoding);

//   const encodingText = await fs.readFile(filepath, encoding);
//   console.log('encodingText ', encodingText);
// };

// func();

// !       appendFile

// import * as fs from 'node:fs/promises';

// const func = async () => {
//   const filepath = './src/text.txt';
//   const result = await fs.appendFile(filepath, 'Python forever!');
//   console.log('result ', result);
// };

// func();

// !       writeFile

import * as fs from 'node:fs/promises';

const func = async () => {
  const filepath = './src/text.txt';
  const result = await fs.writeFile(filepath, 'Java the best!');
  console.log('result ', result);
  const result2 = await fs.writeFile('./src/text2.txt', 'JavaScript the best!');
  console.log('result2 ', result2);
};

func();
