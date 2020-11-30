export default {
  constructor: function () {
  },

  init: function (response) {
    /**
     * response
     *
     * [response.error]      objet si l'utilisateur n'exhiste pas
     * [response.message]    unqiuement en cas de succès : un message d'information
     * [response.id]         unqiuement en cas de succès : l'id de l'utilsateur
     * [response.jwt]        unqiuement en cas de succès : le jeton d'authentification
     * [response.last_name]  unqiuement en cas de succès : le nom de l'utilsateur
     * [response.first_name] unqiuement en cas de succès : le prénom de l'utilisateur
     * [response.role]       unqiuement en cas de succès : 0 utilisateur 1 admin
     *
     */

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

  getData(listOfData){
    const answer = {};
    for(let i = listOfData.length-1; i>0; i--){
      answer[listOfData[i]] = this[listOfData[i]];
    }
    console.log("answer", answer);
    return answer;
  }
};
