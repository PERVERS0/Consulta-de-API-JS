const tabela=document.querySelector("#tabela");


const consulta = async () => {
    try {
        const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(resposta);
        return resposta.data;
        
    } catch (error) {
        console.log(error);
    }
};

const resultado=async()=>{
    const dados= await consulta();
    dados.map((resultado)=>{
        const tr=document.createElement("tr");
        const thId=document.createElement("td");
        const thNome=document.createElement("td");
        const thCidade=document.createElement("td");
        const thApt=document.createElement("td");
        thId.textContent=resultado.id
        thNome.textContent=resultado.name
        thCidade.textContent=resultado.address.city
        thApt.textContent=resultado.address.suite
        tabela.appendChild(tr);
        tabela.appendChild(thId);
        tabela.appendChild(thNome);
        tabela.appendChild(thCidade);
        tabela.appendChild(thApt);
    });
    
};
resultado();
