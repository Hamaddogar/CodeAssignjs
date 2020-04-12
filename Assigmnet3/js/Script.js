var canspeak = true;
var age = 34;

console.log("window this", this)
learnFunction();
function learnFunction() {

    var checkobject = {
        name: "Hamad",
        fatherName: "Muhammad Hamad",
        newfunctionl: function () {
            return "thus s", this.name

        }

    }
   

    //sTRICK mODE
    console.log("checkobject in Strick Mode", checkobject.newfunctionl())
    

//Non Strick Mode
    
    var nonstrickmode = checkobject.newfunctionl.bind(checkobject);
    console.log("non Strick Mode ", nonstrickmode())

    //When none strick mode with new object

    var newobject = {


        name: "areeba Noor"


    }
     var objectnewvar = checkobject.newfunctionl.bind(newobject)

     console.log("Different Object ",objectnewvar())//get areeba noor not hamad
    if (canspeak && age > 45) {
        console.log("You are good Human")


    }

    else if (canspeak || age > 46) {

        console.log("this is function", checkobject.newfunctionl())
        console.log("One Condition is true")

    }
    else {

        console.log("You are   not good Human")



    }



}

