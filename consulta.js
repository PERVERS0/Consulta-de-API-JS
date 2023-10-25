const table=document.querySelector("#table");

const consulta = async () => {
    try {
        const resultado = await axios.get("https://jsonplaceholder.typicode.com/users");
        return resultado.data
    } catch (error) {
        console.log(error);
    }
}
const dados = async () => {
    const resposta = await consulta();
    resposta.map((res)=>{
        console.log(res)
        const tr=document.createElement("tr");
        const tdId=document.createElement("td");
        const tdNome=document.createElement("td");
        const tdCidade=document.createElement("td");
        const tdApt=document.createElement("td");
        tdId.textContent=res.id;
        tdNome.textContent=res.name;
        tdCidade.textContent=res.address.street;
        tdApt.textContent=res.address.suite;
        tr.appendChild(tdId)
        tr.appendChild(tdNome)
        tr.appendChild(tdCidade)
        tr.appendChild(tdApt)
        table.appendChild(tr)
    });
};
dados();
