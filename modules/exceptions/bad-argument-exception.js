class BadArgumentException {
  constructor(value) {
    this.name = "Bad argument exception"
    this.message = `Input : ${value} is not  valid`
  }
}
