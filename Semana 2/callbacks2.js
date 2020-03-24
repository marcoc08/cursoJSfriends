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

const getEmploye = (id, callback) => {
        const employeBD = employesArray.find(employe => employe.id === id);

        if (!employeBD) {
            callback(`no existe el usuario con el id: ${id}`);
        } else {
            callback(null, employeBD)
        }

    }
    //hay que definir la función

const getSalary = (employe, callback) => {
    const salaryDB = salariesArray.find(salary => {
        return salary.id === employe.id
    })

    if (!salaryDB) {
        callback(`No se encontró un salario para el usuario: ${employe.name}`);
    } else {
        callback(null, {
            nombre: employe.name,
            salario: salaryDB.salary,
            id: employe.id
        })
    }
}



getEmploye(2, (err, userDB) => {
    if (err) {
        return console.log(err);
    }
    getSalary(userDB, (err, resp) => {
        if (err) {
            console.log(err);
        } else {
            console.log(resp)
            const { nombre, salario } = resp;
            console.log(`el salario del ${nombre} es ${salario}`)
        }

    })



});