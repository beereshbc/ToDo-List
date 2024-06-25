module.exports.getDate = function(){
    const today = new Date();
    const currentDay = today.getDay()
    const day = ""
 
    const options = {
     weekday:"long",
     day:"numeric",
     month:"long"
    };
 
   return today.toLocaleDateString("en-US", options) 
}



module.exports.getDay= function() {
    const today = new Date();

    const options = {
     year:"numeric",
     weekday:"long",
    };
 
  return   today.toLocaleDateString("en-US", options);

    
}