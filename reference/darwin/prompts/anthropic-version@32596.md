
const { writeSync } = require('fs')
let fd, shared, errnos
onmessage = ({ data }) => {
  if (shared === undefined) {
    ;({ fd, shared, errnos } = data)
    Atomics.store(shared, 3, 1)
    return
  }
  let written = 0
  let errno = 0
  while (written < data.length) {
    // Whole lines of at most PIPE_BUF bytes in one write(2), so that another writer to the same
    // pipe cannot land inside one of them, as with one line per write before; a longer line alone.
    let end = Math.min(written + 4096, data.length)
    if (end < data.length) {
      const lastNewline = data.lastIndexOf(10, end - 1)
      end = lastNewline >= written ? lastNewline + 1 : data.indexOf(10, written) + 1 || data.length
    }
    try {
      written += writeSync(fd, data, written, end - written)
    } catch (e) {
      // The description may be non-blocking: in the runner, code that reads process.stderr at
      // import (the debug package) makes stderr so, and process.stdout where no terminal is
      // named in the environment; another holder may too. Then try again in 5 ms.
      if (e.code === 'EAGAIN') {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 5)
      } else if (e.code !== 'EINTR') {
        errno = errnos.indexOf(e.code) + 1 || errnos.length + 1
        break
      }
    }
  }
  Atomics.store(shared, 1, written)
  Atomics.store(shared, 2, errno)
  Atomics.store(shared, 0, ${Je})
  Atomics.notify(shared, 0)
  postMessage(0)
}
