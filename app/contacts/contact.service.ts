import {Injectable} from 'angular2/core';
import {Contact} from './contact';
import {Utils} from './../_shared/utils';

@Injectable()
export class ContactService {

    getContact(id: number) {
        return Promise.resolve(this.contacts.find(n => n.id == id));
    }

    getContacts() {
        return Promise.resolve(this.contacts);
    }

    private get contacts(): Contact[] {
        let contacts: Contact[] = [];

        contacts.push({ id: 1019, name: 'Iuri André Stona', phone: '4699820025', email: 'istona@gmail.com' });
        this.contactList.forEach(el => {
          contacts.push({ id: parseInt(el.id), name: el.nome, phone: el.phone, email: el.email });
        });

        //contacts = contacts.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);

        contacts = Utils.orderBy(contacts, n => n.name);

        return contacts;
    }

    private contactList = [
        {
          "id": "50675",
          "nome": "Maria Salate Dalpaz Gehlen",
          "phone": "4632321256",
          "email": "agrop.gehlen@wln.com.br"
        },
        {
          "id": "44021",
          "nome": "Dirceu da Rosa",
          "phone": "4699263834",
          "email": "daianapatricia_@hotmail.com"
        },
        {
          "id": "16851",
          "nome": "Pholla Industria e Comercio de Móveis Ltda - ME",
          "phone": "4632422611",
          "email": "gio_scotti@hotmail.com"
        },
        {
          "id": "50633",
          "nome": "Arquimedes Antonio da Veiga",
          "phone": "4688024804",
          "email": "arquimedess@wln.com.br"
        },
        {
          "id": "62097",
          "nome": "Jocieli Catiani da Silva",
          "phone": "4691204254",
          "email": "gatanpi@hotmail.com"
        },
        {
          "id": "69775",
          "nome": "Rosangela Padilha de Souza",
          "phone": "4299710456",
          "email": "rho_consultora@hotmail.com"
        },
        {
          "id": "51796",
          "nome": "Christian Ricardo de Rocco",
          "phone": "4688106998",
          "email": "christian.rocco@caixa.gov.br"
        },
        {
          "id": "47122",
          "nome": "Joao Eloi Cemim",
          "phone": "4699750922",
          "email": "joaocemim@wln.com.br"
        },
        {
          "id": "67825",
          "nome": "Lianir Terezinha Secco",
          "phone": "4299357040",
          "email": "celiofrigo@hotmail.com"
        },
        {
          "id": "37806",
          "nome": "Henriqueta Aparecida de Oliveira",
          "phone": "4699182377",
          "email": "henriqueta2011@hotmail.com"
        },
        {
          "id": "50693",
          "nome": "Guilherme Lucini",
          "phone": "4635261840",
          "email": "guilhermel@wln.com.br"
        },
        {
          "id": "31227",
          "nome": "Antonio Evangelista",
          "phone": "4691158259",
          "email": "antonioevangelista@hotmail.com"
        },
        {
          "id": "54299",
          "nome": "Wandra Gawenda Ziger Maass",
          "phone": "4691226527",
          "email": "wandraziger@gmail.com"
        },
        {
          "id": "40924",
          "nome": "Amauri Antonio Fogaça",
          "phone": "4632322721",
          "email": "amauri@wln.com.br"
        },
        {
          "id": "70005",
          "nome": "Iovane Paulo Palhano",
          "phone": "4298190109",
          "email": "ipp2704@hotmail.com"
        },
        {
          "id": "59202",
          "nome": "Josiane Lopes de Oliveira",
          "phone": "4699156003",
          "email": "josianeloliveira405@hotmail.com"
        },
        {
          "id": "6711",
          "nome": "Alceu Jose Adami",
          "phone": "4699728887",
          "email": "adami@sanrafael.com.br"
        },
        {
          "id": "48901",
          "nome": "Joao Borges de Ramos Filho",
          "phone": "4699056503",
          "email": "joao_borge@hotmail.com"
        },
        {
          "id": "62099",
          "nome": "Margarete Albino Pereira",
          "phone": "4691210826",
          "email": "margatemais@gmail.com"
        },
        {
          "id": "69367",
          "nome": "Aldecir Jose Boaroli",
          "phone": "4291366818",
          "email": "aldecirboaroli@hotmail.com"
        },
        {
          "id": "37375",
          "nome": "Marcelo do Nascimento",
          "phone": "4699855527",
          "email": "marcelon@wln.com.br"
        },
        {
          "id": "69879",
          "nome": "Celso Pagnani",
          "phone": "4299250650",
          "email": "celsopaganini@hotmail.com"
        },
        {
          "id": "49525",
          "nome": "Tiago Luiz Marcondes Pereira",
          "phone": "4699005643",
          "email": "tiago.m.pereira@caixa.gov.br"
        },
        {
          "id": "60164",
          "nome": "Nilza Brancalione",
          "phone": "4632323171",
          "email": "nilzabrancalione@hotmail.com"
        },
        {
          "id": "72048",
          "nome": "Isaias Venancio da Luz Filho",
          "phone": "4399665978",
          "email": "isaiasfilhojr@yahoo.com.br"
        },
        {
          "id": "69578",
          "nome": "Thiago Bergler Bitencourt",
          "phone": "4299525103",
          "email": "thiago06br@yahoo.com.br"
        },
        {
          "id": "71825",
          "nome": "Irene Suelen Santos",
          "phone": "4291384121",
          "email": "suelenzinhalinda@hotmail.com"
        },
        {
          "id": "60168",
          "nome": "Andrea Sonia Barbosa",
          "phone": "4691280898",
          "email": "barbosa98lima@gmail.com"
        },
        {
          "id": "74718",
          "nome": "Juslei Chiossi",
          "phone": "4699224620",
          "email": "juslei_chiossi@hotmail.com"
        },
        {
          "id": "17630",
          "nome": "Andressa Zanchetta",
          "phone": "4688008735",
          "email": "andressa@cercho.com.br"
        },
        {
          "id": "60882",
          "nome": "Guilherme David Rama",
          "phone": "4699257432",
          "email": "guigorama@hotmail.com"
        },
        {
          "id": "46643",
          "nome": "Beatris Schmidt",
          "phone": "4688221845",
          "email": "luziaschmidtbonadimann@hotmail.com"
        },
        {
          "id": "39377",
          "nome": "Jeferson Jose Rodrigues de Oliveira",
          "phone": "4635327101",
          "email": "jeferson-jose25@hotmail.com"
        },
        {
          "id": "69284",
          "nome": "Sao Leopoldo Alimentos Ltda.",
          "phone": "4299271338",
          "email": "nfe@saoleopoldoalimentos.com.br"
        },
        {
          "id": "56672",
          "nome": "Ana Paula Forlin",
          "phone": "4699015827",
          "email": "anapaulaforlin@yahoo.com.br"
        },
        {
          "id": "69473",
          "nome": "Romildo Martins",
          "phone": "4236351142",
          "email": "ronise.mm@hotmail.com"
        },
        {
          "id": "59572",
          "nome": "Sonia Lea Cavalheiro de Almeida Raspolt",
          "phone": "4691092769",
          "email": "soniaraspolt@hotmail.com"
        },
        {
          "id": "59846",
          "nome": "Neide Maria Lanza",
          "phone": "4588293344",
          "email": "camilaelicker@hotmail.com"
        },
        {
          "id": "47952",
          "nome": "Ademir Cesar",
          "phone": "4699406418",
          "email": "cesarademir@outlook.com"
        },
        {
          "id": "56895",
          "nome": "Maria Cleusa da Rocha Porto Lindermayer",
          "phone": "4699378011",
          "email": "deinhakirida@hotmail.com"
        },
        {
          "id": "62025",
          "nome": "Joao Cesar Piloneto",
          "phone": "4691093533",
          "email": "analice.piloneto@outlook.com"
        },
        {
          "id": "59427",
          "nome": "Ana Joana Jegorski",
          "phone": "4284151949",
          "email": "juliniesciur@windowslive.com"
        },
        {
          "id": "67749",
          "nome": "Andre Boeno da Silveira",
          "phone": "4699123878",
          "email": "andreboenodasilveira@hotmail.com"
        },
        {
          "id": "61187",
          "nome": "Leonardo Cesar Alves Trevissan",
          "phone": "4691020185",
          "email": "leonardo.trevissan@outlook.com"
        },
        {
          "id": "67679",
          "nome": "Alexandre Librelato",
          "phone": "4632322499",
          "email": "suporte_propecouros@hotmail.com"
        },
        {
          "id": "59979",
          "nome": "Eder Rosso",
          "phone": "4491315080",
          "email": "ederrosso@hotmail.com"
        },
        {
          "id": "60678",
          "nome": "Valtencir Safraider",
          "phone": "4284186813",
          "email": "safraidervaltecir@hotmail.com"
        },
        {
          "id": "50350",
          "nome": "Bocchi Agronegocios & Cia Ltda",
          "phone": "4635438000",
          "email": "marcusglauco@gmail.com"
        },
        {
          "id": "53089",
          "nome": "Alaercio de Meira",
          "phone": "4688135602",
          "email": "angelarda@wln.com.br"
        },
        {
          "id": "37706",
          "nome": "Jorge Lucas Nogueira Santos",
          "phone": "4635325814",
          "email": "jorgelucas.nog@hotmail.com"
        },
        {
          "id": "74427",
          "nome": "Milene Aparecida de Morais",
          "phone": "4299141898",
          "email": "ligar (42)99352614"
        },
        {
          "id": "46562",
          "nome": "Alvacir Martins do Nascimento",
          "phone": "4635327157",
          "email": "alvacir@wln.com.br"
        },
        {
          "id": "59619",
          "nome": "Adriano Cesar Bilibio",
          "phone": "4599705606",
          "email": "bilibiocesaradriano@hotmail.com"
        },
        {
          "id": "59441",
          "nome": "Tiago Giese",
          "phone": "4691242888",
          "email": "tiagogiese@hotmail.com"
        },
        {
          "id": "51569",
          "nome": "Rogel Antonio Camargo Barreto",
          "phone": "4635322802",
          "email": "rogel.45@hotmail.com"
        },
        {
          "id": "59032",
          "nome": "Evaldo Hoffmann",
          "phone": "4599215504",
          "email": "evaldo@anjos.ind.br"
        },
        {
          "id": "38171",
          "nome": "Nauderi Zandona Franzoni",
          "phone": "4691089503",
          "email": "nauderi@hotmail.com"
        },
        {
          "id": "45467",
          "nome": "Fabiola Cristina Paetzold",
          "phone": "4632421430",
          "email": "fabiolacp@gmail.com"
        },
        {
          "id": "62676",
          "nome": "Carlos Alexandre Oliveira",
          "phone": "4688333654",
          "email": "angelarda@wln.com.br"
        },
        {
          "id": "69519",
          "nome": "Marieli Oleck Storki",
          "phone": "4299759322",
          "email": "maristork@hotmail.com"
        },
        {
          "id": "29228",
          "nome": "John Pablo Oenning",
          "phone": "4699783284",
          "email": "pablooenning@hotmail.com"
        },
        {
          "id": "51728",
          "nome": "Rede Vividense de Comunicacoes Ltda - ME",
          "phone": "4632322233",
          "email": "comercial@redemaxima.com"
        },
        {
          "id": "59336",
          "nome": "Joao Rodrigues Ortiz",
          "phone": "4691014365",
          "email": "carmen_lucia1@hotmail.com"
        },
        {
          "id": "35157",
          "nome": "Roseli Aparecida dos Santos Oliveira",
          "phone": "4691265358",
          "email": "roseli_aob@hotmail.com"
        },
        {
          "id": "59348",
          "nome": "Jucele Daros Schmitz",
          "phone": "4691156562",
          "email": "schmitz@certto.com.br"
        },
        {
          "id": "71603",
          "nome": "Panorama Comercio de Combustiveis Ltda",
          "phone": "4632321285",
          "email": "panoramamariza@gmail.com"
        },
        {
          "id": "25973",
          "nome": "Paulo Cesar dos Santos",
          "phone": "4632252002",
          "email": "paulosantos@wln.com.br"
        },
        {
          "id": "28482",
          "nome": "Rute Miriam Arantes Boaventura",
          "phone": "4632322502",
          "email": "wiipcvv@hotmail.com"
        },
        {
          "id": "56494",
          "nome": "Norberto Bernieri",
          "phone": "4632323777",
          "email": "lojabernieri@gmail.com"
        },
        {
          "id": "60867",
          "nome": "Eclerson Mateus Gielow",
          "phone": "4699217044",
          "email": "eclersonmateus@hotmail.com"
        },
        {
          "id": "56952",
          "nome": "Jurandi Rocha Batista",
          "phone": "4699034482",
          "email": "suporteqdi@comfibra.com.br"
        },
        {
          "id": "58650",
          "nome": "Candido Leonardo Maffei Franca",
          "phone": "4588109029",
          "email": "candido@certto.com.br"
        },
        {
          "id": "55343",
          "nome": "Ivio Junior Elautério",
          "phone": "4691115017",
          "email": "ivio.junior@hotmail.com"
        },
        {
          "id": "53082",
          "nome": "Gleise Marcieli Teixeira Bernieri",
          "phone": "4699724960",
          "email": "gleise_Bernieri@hotmail.com"
        },
        {
          "id": "60949",
          "nome": "Ronivaldo Eudes Borges de Medeiros",
          "phone": "4599531058",
          "email": "ronivaldomedeiros2@hotmail.com"
        },
        {
          "id": "67874",
          "nome": "Rosmeri Prause da Silva",
          "phone": "4599146115",
          "email": "rosmeriprausedasilva@ymail.com"
        },
        {
          "id": "62484",
          "nome": "Vanessa Silva Retuci",
          "phone": "6681279210",
          "email": "vsretuci@gmail.com"
        },
        {
          "id": "73646",
          "nome": "Matheus Fontana Santos",
          "phone": "4991039142",
          "email": "matheusf_3@hotmail.com"
        },
        {
          "id": "66441",
          "nome": "Ederson Moutinelli Spohr",
          "phone": "4699789878",
          "email": "suporterlz@wiip.com.br"
        },
        {
          "id": "67762",
          "nome": "Alexandro dos Santos",
          "phone": "4699174896",
          "email": "alexando1103santos@hotmail.com"
        },
        {
          "id": "42820",
          "nome": "Rosane Fatima Mandrik",
          "phone": "4699059334",
          "email": "mandrik_barbosa@hotmail.com"
        },
        {
          "id": "58940",
          "nome": "Adriano Batista Villetti",
          "phone": "4699359040",
          "email": "adriano@hotmail.com"
        },
        {
          "id": "44104",
          "nome": "Vanarlei da Silva Telles",
          "phone": "4284175492",
          "email": "suporterbiwiip@hotmail.com"
        },
        {
          "id": "16820",
          "nome": "Grislaine Forlin",
          "phone": "4691013621",
          "email": "grislaine@hotmail.com"
        },
        {
          "id": "59445",
          "nome": "Geni Fernandes da Silva",
          "phone": "4599547737",
          "email": "geanifernandes@hotmail.com"
        },
        {
          "id": "59704",
          "nome": "Jhony Alisson Toscan",
          "phone": "4699234152",
          "email": "jhony_toscan@hotmail.com"
        },
        {
          "id": "66636",
          "nome": "Claudemir Rauber",
          "phone": "4699008704",
          "email": "fer2009.chz@hotmail.com"
        },
        {
          "id": "62274",
          "nome": "Larissa de Carvalho Lasta",
          "phone": "4699755627",
          "email": "larissa.lasta@hotmail.com"
        },
        {
          "id": "70175",
          "nome": "Emanoel Rodrigo dos Santos",
          "phone": "4284147480",
          "email": "emanoelerds@gmail.com"
        },
        {
          "id": "59399",
          "nome": "Josmar Rebechi",
          "phone": "4284057379",
          "email": "carla_demenech@hotmail.com"
        },
        {
          "id": "40636",
          "nome": "Marlene Jose de Campos",
          "phone": "4699223301",
          "email": "marlenedecampos@wln.com.br"
        },
        {
          "id": "41556",
          "nome": "Jairo Colussi Junior",
          "phone": "4691173815",
          "email": "juniorcolussi@hotmail.com"
        },
        {
          "id": "73515",
          "nome": "William Almeida Martins",
          "phone": "4299222323",
          "email": "williammartins2016@hotmail.com"
        },
        {
          "id": "34100",
          "nome": "Marcia Tania Rossetti",
          "phone": "4699163347",
          "email": "marciatrossetti@hotmail.com"
        },
        {
          "id": "60959",
          "nome": "Andrieli Bergmann Spohr",
          "phone": "4699227199",
          "email": "suporterlz@wiip.com.br"
        },
        {
          "id": "50349",
          "nome": "Adriane Grade",
          "phone": "4699408723",
          "email": "drika2727@gmail.com"
        },
        {
          "id": "16929",
          "nome": "Rosangela Schnaider",
          "phone": "4691234210",
          "email": "kauechz@yahoo.com"
        },
        {
          "id": "55089",
          "nome": "Gentil Ramos",
          "phone": "4699114383",
          "email": "gentil_ramos2010@yahoo.com.br"
        },
        {
          "id": "73284",
          "nome": "A P M Primeiros Passos Ass.de Pais e Mestres do Centro Mun. de Educ. Inf. Primeiros Passos",
          "phone": "4632423980",
          "email": "eli_31_tr@hotmail.com"
        },
        {
          "id": "42852",
          "nome": "Marcieli Sitta Glaba",
          "phone": "4284042278",
          "email": "marcielisitta@wln.com.br"
        }
    ];

}