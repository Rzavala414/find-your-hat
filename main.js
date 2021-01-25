const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(field){
        this._field = field;
    }

    get field(){
        return this._field;
    }

    print(){
        const displayString = this.field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }

    askQuestion(){
        const direction = prompt('Choose a direction: r= right, l=left d=down u=up: ');
        switch(direction.toLowerCase()){
            case 'r':
                console.log(direction.toLowerCase());
                break;
            case 'l':
                console.log(direction.toLowerCase());
                break;
            case 'd':
                console.log(direction.toLowerCase());
                break;
            case 'u':
                console.log(direction.toLowerCase());
                break;
            default:
                console.log("please enter either R,L,U, or D");
                this.askQuestion();
                break;
        }
    }

    static generateField(height, width){

    }
}


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.print();
  myField.askQuestion();

//   testing