import React from "react"

class PrimeNumber extends React.Component {
    state = {
        primeNumberPosition: 100
    };

    componentDidMount() {
        if (this.state.primeNumberPosition === 1) {
            this.setState({ primeNumberValue: 2 });
        }
        if (this.state.primeNumberPosition >= 2) {
            const { primeNumberPosition } = this.state;
            const primeNumberArray = [2]; // adding prime numbers 2 to the array. Will store the calculated prime numbers
            let counter = 3; // to check numbers starting from 3
            while (primeNumberArray.length < primeNumberPosition) {
                // not calculating for even numbers.
                if (counter % 2 !== 0) {
                    let temp = 3;
                    while (temp * temp <= counter) {
                        if (counter % temp === 0) {
                            break;
                        }
                        temp++;
                    }
                    if (temp * temp > counter) {
                        primeNumberArray.push(counter);
                    }
                }
                counter++;
            }
            this.setState({ primeNumberValue: primeNumberArray[primeNumberArray.length - 1]}); // array position starts from 
        } else {
            console.log('the nth number should start from 1')
        }
    }

    getSuffix = () => {
        const { primeNumberPosition } = this.state;
        let j = primeNumberPosition % 10;
        // number 1st, 2nd, 3rd, and 4-9th.
        // TODO: fix this for number above 100.  
        if (j === 1) {
            return "st";
        }
        if (j === 2) {
            return "nd";
        }
        if (j === 3) {
            return "rd";
        }
        return "th";
    }

    render() {
        const { primeNumberPosition, primeNumberValue } = this.state;
        return (
            <div>
                <h1> {primeNumberPosition}{this.getSuffix(primeNumberPosition)} prime number is {primeNumberValue} </h1>
            </div>
        )
    }
}

export default PrimeNumber;