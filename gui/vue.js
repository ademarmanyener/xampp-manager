var app = new Vue({
	el: '#app',
	data: {
		title: 'Xampp Manager',
		sudoPassword: ''
	},
	methods: {
		checkPassword(input){
			if (input == "" || input == " " || input == null){
				return false;
			} else {
				return true;
			}
		}
	}
});
