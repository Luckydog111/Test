class AClass {
    numbers =[];
    countNumber = 0;

    constructor(countNumber) {
        this.countNumber = countNumber;
        this.#fill();
    }

    #fill() {
        for (let i = 0; i < this.countNumber; i++) {
            const randomNum = Math.trunc(Math.random() * 10);
            this.numbers.push(randomNum);
        }
    }

    factorial() {
        let factorialArray = [];
        for (let i = 0; i < this.countNumber; i++) {
            let result = 1;
            for (let j = this.numbers[i]; j > 1; j--) {
                result *= j;
                
            }
            factorialArray.push(result);
        }
        return factorialArray;
    }
  
    sort() {}
}

class Class1 extends AClass {

    sort() {
        for (let i = 0; i < this.numbers.length - 1; i++) {
            for (let j = 0; j < this.numbers.length - 1 - i; j++) {
                if (this.numbers[j + 1] < this.numbers[j]) {
                    let t = this.numbers[j+1];
                    this.numbers[j + 1] = this.numbers[j];
                    this.numbers[j] = t;
                }
            }
        }
        this.factorial();
        return this.numbers;

    }
}

class Class2 extends AClass {

    sort() {
        for (let i = 0; i < this.numbers.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < this.numbers.length; j++) {
                if (this.numbers[j] < this.numbers[min]) {
                    min = j;
                }
            }
            let t = this.numbers[min];
            this.numbers[min] = this.numbers[i];
            this.numbers[i] = t;
        }
        this.factorial();
        return this.numbers;
    }
}