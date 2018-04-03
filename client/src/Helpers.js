export function makeid(sz) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,.?!";

  for (var i = 0; i < sz; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

// eslint-disable-next-line
Array.prototype.findObj = function (prop, value) {
  for (var i = 0, len = this.length; i < len; i++)
    if (String(this[i][prop]) === String(value))
      return this[i]
}

// eslint-disable-next-line
Array.prototype.findIndexOfObj = function (prop, value) {
  for (var i = 0, len = this.length; i < len; i++)
    if (String(this[i][prop]) === String(value))
      return i
}

export const Immutable = {
  Push(arr, newEntry) {
    return [...arr, newEntry]
  },

  Pop(arr) {
    return arr.slice(0, -1)
  },

  Shift(arr) {
    return arr.slice(1)
  },

  Unshift(arr, newEntry) {
    return [newEntry, ...arr]
  },

  Swap(array, x, y) {
    let arr = [...array]

    let temp = arr[y]
    arr[y] = arr[x]
    arr[x] = temp

    return arr
  },

  Sort(arr, compareFunction) {
    return [...arr].sort(compareFunction)
  },

  Reverse(arr) {
    return [...arr].reverse()
  },

  Splice(arr, start, deleteCount, ...items) {
    return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)]
  },

  Delete(arr, index) {
    return arr.slice(0, index).concat(arr.slice(index + 1))
  }
}
