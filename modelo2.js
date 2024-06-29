function fabArms(nome,substantivo,vroll,troll,xCrit,rCrit,tipo=0,alc=0,pass=0){
    alarr=["-",9,30,90];
    tipoArr=["-","Perfuração","Corte","Impacto"]
    return{
    nome,
    substantivo,
    vroll,
    troll,
    xCrit,
    rCrit,
    alcance:alarr[alc],
    tipoDano:tipoArr[tipo],
    passoup2:!!pass
}}
let armas=[adaga=["Adaga",0,1,4,2,19,1,1],espadaCurta=["Espada Curta",0,1,6,2,19,1],foice=["Foice",0,1,6,3,20,2],clava=["Clava",0,1,6,2,20,3,0],lanca=["Lança",0,1,6,2,20,1,1],maca=["Maça",0,1,8,2,20,3,0],bordao=["Bordão",1,1,6,2,20,3,0],pique=["Pique",1,1,8,2,20,1,0],
tacape=["Tacape",1,1,10,2,20,3,0],azagaia=["Azagaia",0,1,6,2,20,1,2],bestaLeve=["Besta Leve",0,1,8,2,19,1,2],funda=["Funda",0,1,4,2,20,3,2],
arcoCurto=["Arco Curto",1,1,6,3,20,2,2],machadinha=["Machadinha",0,1,6,3,20,2,1],cimitarra=["Cimitarra",0,1,6,2,18,2,0],espadaLonga=["Espada Longa",0,1,8,2,19,2,0],florete=["Florete",1,1,6,2,18,1,0],machadoBatalha=["Machado de Batalha",1,1,8,3,20,2,0],
mangual=["Mangual",1,1,8,2,20,3,0],marteloGuerra=["Martelo de Guerra",1,1,8,3,20,3,0],picareta=["Picareta",0,1,6,4,20,1,0],
tridente=["Tridente",1,1,8,2,20,1,1],alabarda=["Alabarda",0,1,10,3,20,2,0],alfange=["Alfange",0,2,4,2,18,2,0],
gadanho=["Gadanho",1,2,4,4,20,2,0],lancaMontada=["Lança Montada",0,1,8,3,20,1,0],machadoGuerra=["Machado de Guerra",1,1,12,3,20,2,0],
marreta=["Marreta",0,3,4,2,20,3,0],montante=["Montante",0,2,6,2,19,2,0],arcoLongo=["Arco Longo",1,1,8,3,20,1,2],
bestaPesada=["Besta Pesada",0,1,12,2,19,1,2],chicote=["Chicote",1,1,3,2,20,2,0],espadaBastarda=["Espada Bastarda",0,1,10,2,19,2,0],
katana=["Katana",0,1,8,2,19,2,0],machadoAnao=["Machado Anão",1,1,10,3,20,2,0],correnteEspinhos=["Corrente de Espinhos",0,2,4,2,19,2,0],machadoTaurico=["Machado Táurico",1,2,8,3,20,2,0,1],pistola=["Pistola",0,2,6,3,19,1,1],mosquete=["Mosquete",1,2,8,3,19,1,2,1],
porrete=["Porrete",1,1,6,2,20,3,0],zarabatana=["Zarabatana",0,1,3,2,20,1,1],nekote=["Neko-te",1,1,4,2,19,2,0],gladio=["Gládio",1,1,6,3,19,1,0],
tetsubo=["Tetsubo",1,1,10,2,20,3,0],traque=["Traque",1,2,6,3,19,1,1],arcabuz=["Arcabuz",0,2,10,3,19,1,2,1],
bacamarte=["Bacamarte",1,4,6,3,19,1,0,1],acoitefinn=["Açoite Fintroll",1,1,8,2,20,2,0],espadaVespa=["Espada Vespa",0,2,4,2,18,1,0],
pistolaPunhalT=["Pistola-Punhal",0,2,6,3,19,1,1],pistolaPunhalL=["Pistola-Punhal",0,1,6,2,18,1,0],
mordidaDiabo=["Mordida do Diabo",0,1,4,2,20,1,0],presaSerpente=["Presa da Serpente",0,1,8,2,17,2,0],lancafogoT=["Lança de Fogo",1,2,8,3,19,1,2],
lancafogoL=["Lança de Fogo",1,1,10,3,20,1,0],shuriken=["Shuriken",0,1,4,2,20,1,1],arpao=["Arpão",1,1,10,3,20,1,1]]

let titulosMateriais=['','de Aço-Rubi','de Adamante', 'de Gelo Eterno','de Madeira Tollon','de Matéria Vermelha','de Mitral','de Casco de Monstro','de Cristal de Sol','de Lanajuste','de Prata','de Couraça de Kaiju','de Pena de Kraken','de Quitina-Razza'];

let arrTituloModsA=['',' Certeira',' Pungente',' Cruel',' Atroz',' Equilibrada',' Harmonizada',' com Injeção Alquímica',' Maciça',' com Mira telescópica',' Precisa', ' Banhada a Ouro',' Cravejada de Gemas',' Discreta',' Macabra',' Penetrante'];
let arrTituloModsO=['',' Certeiro',' Pungente',' Cruel',' Atroz',' Equilibrado',' Harmonizado',' com Injeção Alquímica',' Maciço',' com Mira telescópica',' Preciso', ' Banhado a Ouro',' Cravejado de Gemas',' Discreto',' Macabro',' Penetrante'];


function titulosModsA(...indexTitu){
    if(indexTitu!=0){
    indexTitu.forEach(n=>titulos+=arrTituloModsA[n])
    console.log(indexTitu)}
    return titulos}
function titulosModsO(...indexTitu){
    if(indexTitu!=0){
    indexTitu.forEach(n=>titulos+=arrTituloModsO[n])
    console.log(indexTitu)}
    return titulos}

let disArma=document.getElementById("disArma2")
let disArma3=document.getElementById("disArma3")
let disDano=document.getElementById("disDano2")
let disCrit=document.getElementById("disCrit2")
let disTipo=document.getElementById("disTipo2")
let disAlc=document.getElementById("disAlc2")
let disOutro=document.getElementById("disOutro2")
let options=document.getElementById("options")
for(i=0;i<armas.length;i++){
    let item= document.createElement('option')
    item.type="option"
    item.text= armas[i][0]
    item.value=i
    item.id=`item${Number(i)}`
    options.appendChild(item)
}

function checar(){
let mods=document.getElementsByName("mod")
let check="";
for(i=0;i<Number(mods.length);i++){
    if(mods[i].checked){
        check=mods[i].value
    }
    
}

console.log(mods)
altArm(fabArms(...armas[Number(options.value)]),Number(check))
}
let titulos=""
function altArm(arma,mod){
    if(mod>4){mod=4};   
    arma.nomeMod=[]
    arma.nomeMaterial=0
    for(let i=0;i<mod;i++){
        modificadores(arma)
}console.log(arma)
// let other=""
// if(arma.Other!=undefined||arma.Other!=null){
//     other=`, outros: ${arma.Other}`
// }
if(arma.substantivo==0){
    titulosModsA(...arma.nomeMod)
}else{
    titulosModsO(...arma.nomeMod)

}
disArma.innerHTML=String(arma.nome)
disDano.innerHTML=String(`${arma.vroll}d${arma.troll}`)
    if(arma.BonAtk==true){disDano.innerHTML+=String(` +${arma.BonAtk}`)}
disCrit.innerHTML=String(`x${arma.xCrit}/${arma.rCrit}`)
disAlc.innerHTML=String(arma.alcance)
disTipo.innerHTML=String(arma.tipoDano)
disOutro.innerHTML=arma.Other!=undefined?String(arma.Other):""
disArma3.innerHTML=String(titulosMateriais[Number(arma.nomeMaterial)]+titulos)
console.log(titulos)
titulos=""
}


function modificadores(arma,num=Number(rand([1,20]))){
    switch(num){
    case 1://certeira
    if(!!arma.certeira==true){
        modificadores(arma)
    }else{
        arma.certeira=true
        arma.BonTest=1
        arma.Other="+1 em testes de ataque"
        arma.nomeMod.push(1)}
        break
    case 2://pungente
        if(!!arma.certeira==false||!!arma.pungente==true){
            modificadores(arma)
        }else{
            arma.BonTest+=1
            arma.pungente=true
            arma.Other="+2 em testes de ataque"
            arma.nomeMod.push(2)
        }
        break
    case 3://cruel
    if(!!arma.cruel==true){
        modificadores(arma)
    } else{arma.cruel=true
        arma.BonAtk=1
        arma.nomeMod.push(3)}
        break
    case 4:// atroz
        if(!!arma.cruel==true||!!arma.atroz==false){
            modificadores(arma)
        }else{arma.BonAtk+=1
            arma.atroz=true
            arma.nomeMod.push(4)
        }
        break
    case 5://equilibrada
        if(!!arma.equilibrada==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em testes de manobras"
            arma.equilibrada=true
            arma.nomeMod.push(5)
        }else{arma.Other+=", +2 em testes de manobras"
            arma.equilibrada=true
            arma.nomeMod.push(5)}
        break
    case 6://harmonizada         arma.Other="Custo de habilidades de ataque -1pm"
        if(!!arma.harmonizada==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Custo de habilidades de ataque -1pm"
            arma.harmonizada=true
            arma.nomeMod.push(6)
        }else{arma.Other+=", custo de habilidades de ataque -1pm"
            arma.harmonizada=true
            arma.nomeMod.push(6)    
        }
            
        break
    case 7://injeção alquimica
        if(!!arma.alquimica==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Gera efeito preparado(2 cargas)"
            arma.alquimica=true
            arma.nomeMod.push(7)
        }else{arma.Other+=", gera efeito preparado(2 cargas)"
            arma.nomeMod.push(7)
            arma.alquimica=true}
        break
    case 8://maciça
        if(!!arma.melCrit==true){
        modificadores(arma)
        }else{
        arma.xCrit+=1
        arma.melCrit=true
        arma.nomeMod.push(8)}
        break
    case 9://mira telescópica
    if(arma.alcance=="-"||!!arma.melAlc==true){
        modificadores(arma)
    }else if(arma.alcance==9){
        arma.alcance=30
        arma.melAlc=true
        arma.nomeMod.push(9)
    }else if(arma.alcance==30){
        arma.alcance=90
        arma.melAlc=true
        arma.nomeMod.push(9)
    }
        break
    case 10://precisa
        if(!!arma.melCrit==true){
            modificadores(arma)
        } else{
            arma.rCrit-=1
            arma.melCrit=true
            arma.nomeMod.push(10)
        }
        break
    case 11://banhado a ouro
        if(!!arma.banhado==true){
        modificadores(arma)
        }else if(!!arma.Other==false){
        arma.Other="+2 em em testes de diplomacia"
        arma.banhado=true
        arma.nomeMod.push(11)
        }else{arma.Other+=", +2 em em testes de diplomacia"
        arma.banhado=true
        arma.nomeMod.push(11)}
        break
    case 12://cravejado de gemas
        if(!!arma.cravejado==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em testes de enganação"
            arma.cravejado=true
            arma.nomeMod.push(12)
        }else{arma.Other+=", +2 em testes de enganação"
            arma.cravejado=true
            arma.nomeMod.push(12)
        }
            break
    case 13://discreto
        if(!!arma.discreto==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Ocupa -1 espaço e +5 para ocultar arma"
            arma.discreto=true
            arma.nomeMod.push(13)
        }else{arma.Other+=", ocupa -1 espaço e +5 para ocultar arma"
            arma.discreto=true
            arma.nomeMod.push(13)
        }
            break
    case 14://macabro
        if(!!arma.macabro==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em intimidação e -2 em diplomacia"
            arma.macabro=true
            arma.nomeMod.push(14)
        }else{arma.Other="+2 em intimidação e -2 em diplomacia"
            arma.macabro=true
            arma.nomeMod.push(14)
    }
            break
    case 15://penetrante
    if(!!arma.cruel==false||!!arma.penetrante==true){
        modificadores(arma)
    }else{
    if(!!arma.rd==true){
        arma.rd+=5
    }else{arma.rd=5
    }
    if(!!arma.Other==false){
        arma.Other=`Ignora 5 ponto de RD`
    }
    else{arma.Other+=`, ignora 5 ponto de RD`}
    arma.penetrante=true
    arma.nomeMod.push(15)

     }   break
    case 16://material
    case 17://material
    case 18://material
    case 19://material
    case 20://material
    materiais(arma)
        break
    default:

        break}
    }

function materiais(arma,num=Number(rand([1,10]))){
    switch(num){
        case 1://aço-rubi
        if(!!arma.material==true){
            modificadores(arma)}else{
        if(!!arma.rd==true){arma.rd+=10}else{arma.rd=10}
        if(!!arma.Other==false){
                arma.Other=`Ignora 10 ponto de RD`
                arma.nomeMaterial=1
        }else {arma.Other+=`, ignora 10 ponto de RD`
            arma.nomeMaterial=1
        }
        arma.material=true}
        break
        case 2://adamante
        if(!!arma.material==true){
            modificadores(arma)}else{
            passoUp(arma)
            arma.material=true
            arma.nomeMaterial=2}
        break
        case 3://gelo eterno
        if(!!arma.material==true){
            modificadores(arma)}else{
            if(!!arma.BonAtk==true){arma.BonAtk+=2}else{arma.BonAtk=2}
            if(!!arma.Other==false){
                arma.Other="Causa 2 pontos de dano por frio"
                arma.nomeMaterial=3
            }else{arma.Other+=", causa 2 pontos de dano por frio"
                arma.nomeMaterial=3
            }
        arma.material=true}
        break
        case 4://madeira tollon
        if(!!arma.material==true){
            modificadores(arma)}else{
                if(!!arma.Other==false){
                arma.Other="Conta como arma magica, habilidades ativadas ao atacar tem custo -1pm"
                arma.nomeMaterial=4
            }else{arma.Other+=", conta como arma magica, habilidades ativadas ao atacar tem custo -1pm"
                arma.nomeMaterial=4
            }
        arma.material=true}
        break
        case 5://matéria vermelha
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.danomaterial="1d6"
                if (!!arma.Other==false){
                    arma.Other="Causa +1d6 extra, mas causa 1 ponto de dano ao usar"
                    arma.nomeMaterial=5
                }else{arma.Other+=", causa +1d6 extra, mas causa 1 ponto de dano ao usar"
                    arma.nomeMaterial=5
                }
                arma.material=true}
        break
        case 6://mitral
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.material=true
                arma.nomeMaterial=6    
                arma.rCrit--
            }
            break
        case 7://casco de monstro
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.material=true
                if(!!arma.Other==false){
                    arma.Other="Conta como arma primitiva"                    
                    arma.nomeMaterial=7
                }else{
                    arma.Other+=", conta como arma primitiva"
                    arma.nomeMaterial=7
                }
            }
            break
        case 8://cristal de sol
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=8
                if(arma.tipoDano!="corte"||arma.tipoDano!="perfuração"){
                    modificadores(arma)}else{
                        if(!!arma.BonAtk==true){arma.BonAtk+=2}else{arma.BonAtk=2}
                        if(!!arma.Other==false){
                      arma.Other="Causa 2 pontos de dano por fogo"
                   }else{arma.Other+=", causa 2 pontos de dano por fogo"}
                      arma.material=true}}
                      console.log(arma.tipoDano=="corte"||arma.tipoDano=="perfuração")
            break
        case 9://lanajuste
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=9
                arma.material=true
                if(!!arma.Other==false){
                    arma.Other="Ignora penalidade por combate submerso"                    
                }else{
                    arma.Other+=", ignora penalidade por combate submerso"
                }
            }
            break
        case 10://prata
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=10
                if(!!arma.Other==false){
                    arma.Other="+2 de dano e conta como arma magica em espíritos e mortos vivos"                    
                }else{
                    arma.Other+=", +2 de dano e conta como arma magica em espíritos e mortos vivos"
                }
            }
            break
        case 11://couraça de kaiju-
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=11
                arma.material=true
                passoUp(arma)
                if(!!arma.Other==false){
                    arma.Other="Pode gastar 2pm para ignorar redução de dano"                    
                }else{
                    arma.Other+=", pode gastar 2pm para ignorar redução de dano"
                }
            }
            break
        case 12://pena de kraken-
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=12
                arma.material=true
                if(!!arma.Other==false){
                    arma.Other="Aumenta o dano em 2 passos no dano (antes de multiplicar)"                    
                }else{
                    arma.Other+=", aumenta o dano em 2 passos no dano (antes de multiplicar)"
                }
            }
            break
        case 13://quitina razza-
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.nomeMaterial=13
                arma.material=true
                if(!!arma.Other==false){
                    arma.Other="Quando rolar o máximo no dado de dano, role outro dado extra, repetindo se necessário."
                }else{
                    arma.Other+=", quando rolar o máximo no dado de dano, role outro dado extra, repetindo se necessário."
                }
            }
            arma.material=true
            break
    }
return arma
        }
function rand([min=0,max=100]){
    if (min>max) {[min,max]=[max,min]}
    const valor =Math.random()*(max-min)+min
    return Math.floor(valor)
}    

function passoUp(arma){
    if(arma.passo<4||!!arma.passo==false){
        if(!!arma.passoup2){
            if(arma.passo==2){
                arma.troll+=2
            }else{arma.vroll++}
        }else{
    arma.troll+=2

    if(arma.vroll==1&&arma.troll*arma.vroll>12){
        arma.troll=6
        arma.vroll+=2
    }else if(arma.vroll>1&&arma.troll>6){
        arma.vroll++    
        arma.troll=6

    }}
    if(!!arma.passo==false){
        arma.passo=1
    }else{arma.passo++}}else{
        return("arma não pode ser melhorada")
    }
    return arma
}
