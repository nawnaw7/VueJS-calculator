var calculator = new Vue({
    el: '#app',
    data: {
        x: '',
        y: '',
        total: 0,
        display: 0,
        history: '',
        operator: null,
        expres: '',
        curOperation: [],
        lastChar: this.history[this.history.length - 1]
    },

    methods: {
        readNumber: function(n) {
            if (this.operator === null) {
                this.x += n;
                this.display = this.x;
                //come back to this
            } else {
                this.y += n;
                this.display = this.y;
                //come back to this
            }
        },

        immediateCalc: function() {
        	// replace last operator with new operator if 2 operators are clicked one after the other
        	/*
        	if (this.history.charAt(this.history.length - 1) === '*') {
        		if (this.y === '') {
        			this.history = this.history.slice(0, -1);
        			this.history += this.operator;

        		}
        	}
			*/
        	this.curOperation.push(this.operator);
        	console.log(this.curOperation);
            

            if (this.x !== '' && this.y !== '') {
                this.expres = this.x + this.curOperation[0] + this.y;
                console.log(this.expres);
                this.expres = eval(this.expres);
                this.display = this.expres;
                this.x = this.expres;
                this.y = '';
                this.curOperation.shift();
            }

        },

        calculate: function() {
        	// Calculate only if both x and y are defined
            if (this.y !== '') {
                switch (this.operator) {
                    case '+':
                        this.total = parseFloat(this.x) + parseFloat(this.y);
                        break;
                    case '-':
                        this.total = parseFloat(this.x) - parseFloat(this.y);
                        break;
                    case '*':
                        this.total = parseFloat(this.x) * parseFloat(this.y);
                        break;
                    case '/':
                        this.total = parseFloat(this.x) / parseFloat(this.y);
                        break;
                }
                this.display = this.total;
                this.x = this.total;
                this.y = '';
                this.history = this.x;
            }
        },

        clearCur: function() {
            this.history = this.history.substring(0, this.history.length - this.y.length);
            this.y = '';
            this.display = 0;
        },

        clearAll: function() {
            this.init();
        },

        init: function() {
            this.x = '';
            this.y = '';
            this.display = 0;
            this.history = '';
            this.operator = null;
            this.expres = '';
            this.curOperation.length = 0;
        }
    }

});