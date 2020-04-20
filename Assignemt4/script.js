

//java Script  where varibale and  function are declaration are move to top of their scop


functionDeclaration()



function functionDeclaration() {
    var objectmy = {
        newname: "Muhamamd Hamad",
        fname: "Muhammad Shafiq",
        Country: "Pakistan",
        newfucntion: function () {
            return this.newname 
        }


    }
//this is Strick Mode
    // console.log(objectmy.newfucntion())

     // this is non Strick Mode
     var checkVariable= objectmy.newfucntion.bind(objectmy)
      console.log("bySaving Fucntion"+checkVariable())


}

//This is fucntion Expressopm

var addfunction = function()
{
     var exresstionObject={
     youdrName :"Muhammad Ali"

     }

  let nonstrickMode =exresstionObject. youdrName
     console.log(nonstrickMode)
      
    console.log("This is Fucntional Expression")
    
    
}
addfunction();


// function otherfunction()
// {


// }


// this  is about constructer and Super
 class Myfucntion
 {
 constructor()
 {
 this.frind="Batti"
     
     
 }


 }

  class NewMyfucntion extends Myfucntion{

     constructor()
     {

        super()


     }



  }


   const  learnobject= new NewMyfucntion ()
     console.log(learnobject.frind)