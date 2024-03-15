function fungsiA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fungsi A selesai");
      resolve();
    }, 2000);
  });
}

function fungsiB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fungsi B selesai");
      resolve();
    }, 1500); 
  });
}

function fungsiC() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fungsi C selesai");
      resolve();
    }, 1000);
  });
}

function fungsiD() {
  console.log("Fungsi D selesai");
}

async function main() {
  try {
    await Promise.all([fungsiA(), fungsiB()]);
    await fungsiC();
    fungsiD();
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

main();
