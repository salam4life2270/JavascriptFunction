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
add({email:"jane@gmail.com",name:"jane"}); // add is a function
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
remove({email:"jane@gmail.com"}); // remove is a function
console.log("after remove")





/* Editing name and email for Frasco*/

const edit = (email,newData) => {
    for (let i=0;i<contacts.lenght;i++) {
    if (email === contacts[i].email) {
        contacts = newData;
        console.log("was updated")
        return;
    }
        else {
        console.log("not updated")
    }
}
}
edit ("frasco2gmail.com",{email:"Doe@gmail.com",name:"Doe"}); // edit is a function







/* get( email ) - Output information for the corresponding contact */
const get = (email) => {
    for (let i=0;i<contacts.lenght;i++) {
        if (email === contacts[i].email) {
            console.log(contacts[i].name)
            console.log(contacts[i].email)
            return;
        }
    }
    console.log ("contact not found")
    
}
get ("onstanta@gmail.com") // get is a function
    console.log(contacts)






/* List all contacts available in the contact list*/
const list = (names) =>{
    names.forEach(name => console.log(name));
}
list (contacts) // list is a function





/*clear() - Remove all contacts from the list*/

const clear = () =>{
    contacts = []
    console.log ("The contact list was cleared")
}
clear () // Clear is a function