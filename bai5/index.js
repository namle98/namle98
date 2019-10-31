async function getData(){
    let res = await axios.get("http://dummy.restapiexample.com/api/v1/employees")
    let data = res.data
    console.log(data)
    let table = document.getElementById("my-table")
    let tBodyContent = ""
    data.forEach(record =>{
        let id = record.id
        let ten = record.employee_name
        let tuoi = record.employee_age
        let luong = record.employee_salary
        let template = `<tr>
        <td>${id}</td>
        <td>${ten}</td>
        <td>${tuoi}</td>
        <td>${luong}</td>
        </tr>`
        tBodyContent += template
    })
table.tBodies[0].innerHTML= tBodyContent
}
getData()
console.dir(document.getElementById("my-table"))
