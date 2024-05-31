const ethers = require('ethers');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Deklarasikan intValue di luar blok rl.question
let intValue;

rl.question('Masukkan angka bulat:', (userInput) => {
  // Jangan deklarasikan lagi dengan let di dalam blok ini
  intValue = parseInt(userInput);
  console.log('Angka bulat yang dimasukkan:', intValue);

  // Panggil fungsi untuk melanjutkan eksekusi setelah input diterima
  lanjutkanProses();
  rl.close();
});

// Fungsi untuk melanjutkan eksekusi setelah input diterima
function lanjutkanProses() {
  const angka = intValue;

  // Wallet akan dibuat hanya jika angka lebih besar dari 0
  if (angka > 0) {
    for (let i = 0; i < angka; i++) {
      const proses = ethers.Wallet.createRandom();
      console.log(`Wallet ${i + 1}:`);
      const priv = proses.mnemonic.phrase;
      const pk = proses.privateKey;
      const address = proses.address; // Akses address dari wallet yang dibuat
      console.log(`Mnemonic Phrase: ${priv}`);
      console.log(`Private Key: ${pk}`);
      console.log(`Address: ${address}`);
      console.log('----------------------');
    }
  } else {
    console.log('Angka tidak valid.');
  }
}
