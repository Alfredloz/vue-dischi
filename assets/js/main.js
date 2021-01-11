let app = new Vue({
	el: '#app',
	data:{
		diskArray:[],
	},
	methods:{

	},
	mounted(){
		var config = {
			method: 'get',
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			headers: { 
			 
			}
		  };
		  
		  axios(config)
		  .then(response =>{
			// console.log(JSON.stringify(response.data));
			this.diskArray = response.data.response
			console.log(this.diskArray);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	}
})