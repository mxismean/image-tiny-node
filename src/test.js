const https = require('https')
const fs = require('fs')
const path = require('path')

https.get(
  'https://bb-s1.oss-cn-shanghai.aliyuncs.com/w-admin-clover-node/pngtiny-custom.wasm',
  (res) => {
    const chunks = []
    let size = 0
    if (res.statusCode === 200) {
      res.on('data', (chunk) => {
        chunks.push(chunk)
        size += chunk.length
      })
      res.on('end', () => {
        switch (chunks.length) {
          case 0:
            data = Buffer.alloc(0)
            break
          case 1:
            data = chunks[0]
            break
          default:
            data = Buffer.alloc(size)
            for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
              const chunk = chunks[i]
              chunk.copy(data, pos)
              pos += chunk.length
            }
            break
        }
        console.log(111, data)
      })
    }
  }
)

fs.readFile(path.join(__dirname, '../plugins/pngtiny-custom.wasm'), (err, data) => {
  if (err) throw err
  console.log(222, data)
})
