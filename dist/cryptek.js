(() => {
  // src/cryptek.js
  var Cryptek = class {
    ngrams = [];
    constructor(n2, length, text2) {
      this.n = n2;
      this.text = text2;
      this.length = length;
      this.ngrams = this.grams();
    }
    grams() {
      const ngrams = [];
      for (let i = 0; i <= this.text.length - n; i++) {
        const gram = this.text.substring(i, i + n);
        if (!ngrams[gram]) {
          ngrams[gram] = [];
        }
        ngrams[gram].push(this.text.charAt(i + n));
      }
      return ngrams;
    }
    chain() {
      let current_gram = this.text.substring(0, this.n);
      let result = current_gram;
      for (let i = 0; i < this.length; i++) {
        const possibilities = this.ngrams[current_gram];
        if (!possibilities) {
          break;
        }
        const random = Math.floor(Math.random() * possibilities.length);
        const next = possibilities[random];
        result += next;
        current_gram = result.substring(result.length - n, result.length);
      }
      return result;
    }
  };
  var text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";
  var n = 3;
  var cryptek = new Cryptek(n, 50, text);
  console.log(cryptek.chain());
})();
