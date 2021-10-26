class Cryptek {

  ngrams = [];

  constructor(n, length, text) {
    this.n    = n;
    this.text = text;
    this.length = length;
    this.ngrams = this.grams();
  }

  grams() {
    const ngrams = [];

    for(let i = 0; i <= this.text.length - n; i++) {
      const gram = this.text.substring(i, i + n);

      if(!ngrams[gram]) {
        ngrams[gram] = [];
      }

      ngrams[gram].push(this.text.charAt(i + n))
    }

    return ngrams;
  }

  chain() {
    let current_gram = this.text.substring(0, this.n);
    let result = current_gram;
    for (let i = 0; i < this.length; i++) {
      const possibilities = this.ngrams[current_gram];

      if(!possibilities) {
        break;
      }

      const random = Math.floor(Math.random() * possibilities.length);
      const next   = possibilities[random]
      result      += next;
      current_gram = result.substring(result.length - n, result.length);
    }

    return result
  }

}

// TODO: Remove
//
// const text = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.';
// const n = 3;
// const cryptek = new Cryptek(n, 50, text);
// console.log(cryptek.chain());
