/* Create a contact list where every contact must have a name and email */

let contacts = [
    {
      name: "Frasco",
      email: "frasco@gmail.com",

    },
    
    {
      name: "Constanta",
      email: "constanta@gmail.com",

    },
    {
      name:  "Cammi",
      email: "cammi@gmail.com",

    },
    {
      name: "Darcey",
      email: "darcey@gmail.com",

    },
    {
      name: "Audrie",
      email: "audrie@gmail.com",

    }


];



/* Adding a new contact to the list */

const add = (contact)=>{
    for(let i=0;i<contacts.length;i++) {
        if(contact.email===contacts[i].email) {
            console.log("Duplicate was found")
            return;
        }
    }

    if(!contact.email || !contact.name){
        console.log("Missing fields")
        return;
    }

    contacts.push(contact);
    console.log("was added");
}
add({email:"jane@gmail.com",name:"jane"});
console.log("after add")

/* Removing email from the contact list */

const remove = (email) =>{

    for(let i=0;i<contacts.length;i++) {
        if(email.email == contacts[i].email) {
            console.log("remove email");
            contacts.splice(i, 1);
            return;
        }
        else{
            console.log("Contact not found")
        }
    }

}
remove({email:"jane@gmail.com"});
console.log("after remove")
