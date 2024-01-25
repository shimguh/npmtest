class Random {
	constructor() {
		this.names = [];
	}
	addName(name) {
		this.names.push(name);
	}

	print() {
		const max = this.names.length-1;
		const min = 0;
		const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(`발표자: ${this.names[randomNum]}`);
	}
}

class Presentor extends Random {
	constructor(name) {
		super();
		// this.names.forEach(name => this.addName(name));
		this.addName(name);
	}
}

const presentorNames = process.argv.slice(2);
const presentor = new Presentor(presentorNames);

if(presentor.names.length < 2) {
	console.log('발표자가 2명 미만 입니다.');
} else {
	presentor.print();
}
