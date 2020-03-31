//Las promesas solo tienen 3 resultados => succes, failed, pending
const employesArray = [{
    id: 1,
    name: 'marquito'
}, {
    id: 2,
    name: 'armandito'
}, {
    id: 3,
    name: 'moy6'
}];

const salariesArray = [{
    id: 1,
    salary: 1000
}, {
    id: 2,
    salary: 4000
}];


const getEmploye = id => {

    return new Promise((resolve, reject) => {

        const employeBD = employesArray.find(employe => employe.id === id); //=> pending


        if (!employeBD) {
            reject(`no existe el usuario con el id => ${id}`); // => failed
        } else {
            resolve(employeBD)
        }

    });
}

//getEmploye(1).then(cachamoselUsuario => console.log(cachamoselUsuario))
//  .catch(err => console.log(err))



const getSalary = employe => {

    return new Promise((resolve, reject) => {

        const salaryDB = salariesArray.find(salary => {
            return salary.id === employe.id;
        })

        if (!salaryDB) {
            reject(`No se encontró un salario para el usuario: ${employe.name}`);
        } else {
            resolve({
                nombre: employe.name,
                salario: salaryDB.salary,
                id: employe.id
            })
        }
    });
}

getEmploye(2)
    .then(cachamoselUsuario => {
        getSalary(cachamoselUsuario)
            .then(resp => console.log(`El empleado ${resp.nombre} tiene un salario de ${resp.salario}`))
            .catch(err => console.log(err))
    })
    .catch(err => console.log(err))