

export default{

  constructor: function(){
    console.log('rrrrrrrrrrrrrrr');
  },
  init : function(response){
    console.log('aaaaaaaaaaaa', response);
    const token = response.config.headers.Authorization;
    if (token === undefined) return;
    sessionStorage.setItem("jwt",token);
  },
  addHeader: function(){
    return {
      'Content-Type': 'application/json',
      'Authorization': sessionStorage.getItem("jwt")
    }
  }

}