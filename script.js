var calculator = new Vue({
	el: '#app',
	data: {
		x: '',
		y: '',
		total: 0,
		display: 0,
		history: '',
		operator: null
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

		calculate: function() {
			switch(this.operator) {
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
			this.x = '' + this.total + ''; 
			this.y = '';
			this.operator = null;
		},

		clear: function() {

		},

		clearAll: function() {

		}
	}

});