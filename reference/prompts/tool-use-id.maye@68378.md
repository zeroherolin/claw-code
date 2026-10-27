
      const _WeakMap = WeakMap, _WeakSet = WeakSet, _isArray = Array.isArray,
            _keys = Object.keys, _defineProperty = Object.defineProperty,
            _Error = Error, _isSafeInteger = Number.isSafeInteger,
            _isError = typeof Error.isError === 'function' ? Error.isError : null,
            _ownDescriptor = Object.getOwnPropertyDescriptor
      
      const _capSet = new _WeakSet()
      function capErr(msg) {
        const e = new _Error(msg)
        _capSet.add(e)
        return e
      }
      function isCap(e) {
        try { return _capSet.has(e) } catch { return false }
      }
      
      function isStackEnd(e) {
        if (_isError === null || !_isError(e)) return false
        const said = _ownDescriptor(e, 'message')
        return said !== undefined && (said.value === '${…}' || said.value === '${…}')
      }
      function lost(e) {
        if (isCap(e)) throw e
        if (isStackEnd(e)) throw capErr('${CVr}')
      }
      function checkedLength(v) {
        let len
        try { len = v.length } catch (e) {
          lost(e)
          throw new _Error('unable to read array length across the workflow VM boundary')
        }
        if (typeof len !== 'number' || !_isSafeInteger(len)) {
          throw capErr('array length is not a safe integer across the workflow VM boundary')
        }
        ${s}
        return len
      }
      const copy = (rootVal) => {
        if (typeof rootVal === 'function') return undefined
        if (rootVal === null || typeof rootVal !== 'object') return rootVal
        const seen = new _WeakMap()
        let childKeys = null, childLength = 0
        function make(v, depth) {
          if (depth > ${…}) {
            throw capErr('${…}')
          }
          if (_isArray(v)) {
            ${…}
            const len = checkedLength(v)
            ${…}
            childKeys = null; childLength = len
            return out
          }
          const out = {}; seen.set(v, out)
          childLength = 0
          let ks; try { ks = _keys(v) } catch (e) { lost(e); return out }
          childKeys = ks; childLength = ks.length
          return out
        }
        const root = make(rootVal, 1)
        let src = rootVal, out = root, keys = childKeys, len = childLength, i = 0, depth = 1
        let own = null, below = null
        for (;;) {
          if (i >= len) {
            if (below === null) return root
            own = below; below = own.below
            src = own.src; out = own.out; keys = own.keys; len = own.len; i = own.i; depth = own.depth
            continue
          }
          const at = i++
          let down = null, made
          if (keys === null) {
            try {
              const vi = src[at]
              if (vi === null || typeof vi !== 'object') { out[at] = typeof vi === 'function' ? undefined : vi; continue }
              const hit = seen.get(vi)
              if (hit !== undefined) { out[at] = hit; continue }
              made = out[at] = make(vi, depth + 1)
              down = vi
            } catch (e) { lost(e); out[at] = undefined; continue }
          } else {
            const k = keys[at]
            ${…}
            try {
              const vk = src[k]
              if (typeof vk === 'function') continue
              made = vk
              if (vk !== null && typeof vk === 'object') {
                const hit = seen.get(vk)
                if (hit !== undefined) made = hit
                else { made = make(vk, depth + 1); down = vk }
              }
              _defineProperty(out, k, { value: made, writable: true, enumerable: true, configurable: true })
            } catch (e) { lost(e); continue }
          }
          if (down === null || childLength === 0) continue
          if (own === null) own = { src, out, keys, len, i, depth, below }
          else own.i = i
          below = own; own = null
          src = down; out = made; keys = childKeys; len = childLength; i = 0; depth = depth + 1
        }
      }