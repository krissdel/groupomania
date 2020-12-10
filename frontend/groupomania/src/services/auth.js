export default {
  constructor: function () {
  },

  init: function (response) {
    if (response.error !== undefined) throw response;
    for (const [key, value] of Object.entries(response)) {
      if (key !== "message") {
        sessionStorage.setItem(key, value);
        this[key] = value;
      }
    }
  },


  addHeader: function () {
    return {
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("jwt"),
    };
  },

  logout(){
    sessionStorage.clear();  
  },

  clearRefs() {
     sessionStorage.removeItem('refs');
  },

  getData(listOfData){
    const answer = {};
    for(let i = listOfData.length-1; i>0; i--){
      answer[listOfData[i]] = this[listOfData[i]];
    }
    console.log("answer", answer);
    return answer;
  }
};
