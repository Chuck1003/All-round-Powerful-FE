function greeter(user: string){
    return 'Hello' + user;
}
let person = 'Ekko_Chen';

document.body.innerHTML = greeter(person);