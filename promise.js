const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require('fs/promises')
// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const file = './external.js'
const utf8 = 'utf-8'

const promiseOutput = async (args) => {
  
  try {
    let result= [];
    const hasil_ixx = await promiseTheaterIXX(fs.readFile(file, utf8))
    const hasil_vgc = await promiseTheaterVGC(fs.readFile(file, utf8))
    result.push(hasil_ixx)
    result.push(hasil_vgc)

    if (args === 'marah') {
      const ixxCount = result[0].filter((a) => a.hasil == 'marah')
      const vgcCount = result[1].filter((a) => a.hasil == 'marah')
      return ixxCount.length + vgcCount.length
    }
    else {
      const ixxCount = result[0].filter((a) => a.hasil == 'tidak marah')
      const vgcCount = result[1].filter((a) => a.hasil == 'tidak marah')
      return ixxCount .length + vgcCount.length
    }
  }
  catch(err) {
    return err
  }
}

module.exports = {
  promiseOutput,
};
