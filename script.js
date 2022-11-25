/* 
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let listPatient = [];
let option = "";
const newPatient = [];

do {
  let patient = "";
  for (let i = 0; i < listPatient.length; i++) {
    patient += i + 1 + "° - " + listPatient[i] + "\n";
  }

  option = prompt(
    "Paciente:\n" +
      patient +
      "\nEscolha uma Opção:\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair"
  );

  switch (option) {
    case "1":
      const newPatient = prompt("Qual é o nome do paciente?");
      listPatient.push(newPatient);
      break;

    case "2":
      const patientWithUltrasound = listPatient.shift();
      if (!patientWithUltrasound) {
        alert("Não há pacientes na fila!");
      } else {
        alert(patientWithUltrasound + " Foi removido da fila.");
      }
      break;

    case "3":
      alert("Encerrando...");
      break;

    default:
      alert("Opção Inválida");
      break;
  }
} while (option !== "3");
