function fabArms(nome,vroll,troll,xCrit,rCrit,tipo=0,alc=0,pass=0){
    alarr=["-",9,30,90];
    tipoArr=["-","Perfuração","Corte","Impacto"]
    return{
    nome,
    vroll,
    troll,
    xCrit,
    rCrit,
    alcance:alarr[alc],
    tipoDano:tipoArr[tipo],
    passoup2:!!pass
}}
let armas=[adaga=["Adaga",1,4,2,19,1,1],espadaCurta=["Espada Curta",1,6,2,19,1],
foice=["Foice",1,6,3,20,2],clava=["Clava",1,6,2,20,3,0],lanca=["Lança",1,6,2,20,1,1],
maca=["Maça",1,8,2,20,3,0],bordao=["Bordão",1,6,2,20,3,0],pique=["Pique",1,8,2,20,1,0],
tacape=["Tacape",1,10,2,20,3,0],azagaia=["Azagaia",1,6,2,20,1,2],bestaLeve=["Besta Leve",1,8,2,19,1,2],
funda=["Funda",1,4,2,20,3,2],arcoCurto=["Arco Curto",1,6,3,20,2,2],
machadinha=["Machadinha",1,6,3,20,2,1],cimitarra=["Cimitarra",1,6,2,18,2,0],
espadaLonga=["Espada Longa", 1,8,2,19,2,0],florete=["Florete",1,6,2,18,1,0],
machadoBatalha=["Machado de Batalha",1,8,3,20,2,0],mangual=["Mangual",1,8,2,20,3,0],
marteloGuerra=["Martelo de Guerra",1,8,3,20,3,0],picareta=["Picareta",1,6,4,20,1,0],
tridente=["Tridente",1,8,2,20,1,1],alabarda=["Alabarda",1,10,3,20,2,0],
alfange=["Alfange",2,4,2,18,2,0],gadanho=["Gadanho",2,4,4,20,2,0],
lancaMontada=["Lança Montada",1,8,3,20,1,0],machadoGuerra=["Machado de Guerra",1,12,3,20,2,0],
marreta=["Marreta",3,4,2,20,3,0],montante=["Montante",2,6,2,19,2,0],
arcoLongo=["Arco Longo", 1,8,3,20,1,2],bestaPesada=["Besta Pesada",1,12,2,19,1,2],
chicote=["Chicote",1,3,2,20,2,0],espadaBastarda=["Espada Bastarda",1,10,2,19,2,0],
katana=["Katana",1,8,2,19,2,0],machadoAnao=["Machado Anão",1,10,3,20,2,0],
correnteEspinhos=["Corrente de Espinhos",2,4,2,19,2,0],machadoTaurico=["Machado Táurico", 2,8,3,20,2,0,1]
,pistola=["Pistola",2,6,3,19,1,1],mosquete=["Mosquete",2,8,3,19,1,2,1],porrete=["Porrete",1,6,2,20,3,0],
zarabatana=["Zarabatana",1,3,2,20,1,1],nekote=["Neko-te",1,4,2,19,2,0],gladio=["Gládio",1,6,3,19,1,0],
tetsubo=["Tetsubo",1,10,2,20,3,0],traque=["Traque",2,6,3,19,1,1],arcabuz=["Arcabuz",2,10,3,19,1,2,1],
bacamarte=["Bacamarte",4,6,3,19,1,0,1],acoitefinn=["Açoite Fintroll",1,8,2,20,2,0],
espadaVespa=["Espada Vespa",2,4,2,18,1,0],pistolaPunhalT=["Pistola-Punhal",2,6,3,19,1,1],
pistolaPunhalL=["Pistola-Punhal",1,6,2,18,1,0],mordidaDiabo=["Mordida do Diabo",1,4,2,20,1,0],
presaSerpente=["Presa da Serpente",1,8,2,17,2,0],lancafogoT=["Lança de Fogo",2,8,3,19,1,2],
lancafogoL=["Lança de Fogo",1,10,3,20,1,0],shuriken=["Shuriken",1,4,2,20,1,1],arpao=["Arpão",1,10,3,20,1,1]]


let res= document.getElementById("res")
let disArma=document.getElementById("disArma2")
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

function altArm(arma,mod){
    for(let i=0;i<mod;i++){
        modificadores(arma)
}console.log(arma)
let other=""
if(arma.Other!=undefined||arma.Other!=null){
    other=`, outros: ${arma.Other}`
}
res.innerHTML =`${arma.nome}, dano: ${arma.vroll}d${arma.troll}, crítico: ${arma.xCrit}/${arma.rCrit}, tipo:${arma.tipoDano}, alcance:${arma.alcance} mods:${mod}`+other
disArma.innerHTML=String(arma.nome)
disDano.innerHTML=String(`${arma.vroll}d${arma.troll}`)
disCrit.innerHTML=String(`${arma.xCrit}/${arma.rCrit}`)
disAlc.innerHTML=String(arma.alcance)
disAlc.innerHTML=String(arma.tipoDano)
disOutro.innerHTML=String(arma.Other)
}

function modificadores(arma,num=Number(rand([1,16]))){
    switch(num){
    case 1://certeira
    if(!!arma.certeira==true){
        modificadores(arma)
    }else{
        arma.certeira=true
        arma.BonTest=1}
        break
    case 2://pungente
        if(!!arma.certeira==false||!!arma.pungente==true){
            modificadores(arma)
        }else{
            arma.BonTest+=1
            arma.pungente=true
        }
        break
    case 3://cruel
    if(!!arma.cruel==true){
        modificadores(arma)
    } else{arma.cruel=true
        arma.BonAtk=1}
        break
    case 4:// atroz
        if(!!arma.cruel==true||!!arma.atroz==false){
            modificadores(arma)
        }else{arma.BonAtk+=1
            arma.atroz=true
        }
        break
    case 5://equilibrada
        if(!!arma.equilibrada==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em testes de manobras"
            arma.equilibrada=true
        }else{arma.Other+=", +2 em testes de manobras"
            arma.equilibrada=true}
        break
    case 6://harmonizada         arma.Other="Custo de habilidades de ataque -1pm"
        if(!!arma.harmonizada==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Custo de habilidades de ataque -1pm"
            arma.harmonizada=true
        }else{arma.Other+=", custo de habilidades de ataque -1pm"
            arma.harmonizada=true
            }
        break
    case 7://injeção alquimica
        if(!!arma.alquimica==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Gera efeito preparado(2 cargas)"
            arma.alquimica=true
        }else{arma.Other+=", gera efeito preparado(2 cargas)"
            arma.alquimica=true}
        break
    case 8://maciça
        if(!!arma.melCrit==true){
        modificadores(arma)
        }else{
        arma.xCrit+=1
        arma.melCrit=true}
        break
    case 9://mira telescópica
    if(arma.alcance=="-"||!!arma.melAlc==true){
        modificadores(arma)
    }else if(arma.alcance==9){
        arma.alcance=30
        arma.melAlc=true
    }else if(arma.alcance==30){
        arma.alcance=90
        arma.melAlc=true
    }
        break
    case 10://precisa
        if(!!arma.melCrit==true){
            modificadores(arma)
        } else{
            arma.rCrit-=1
            arma.melCrit=true
        }
        break
    case 11://banhado a ouro
        if(!!arma.banhado==true){
        modificadores(arma)
        }else if(!!arma.Other==false){
        arma.Other="+2 em em testes de diplomacia"
        arma.banhado=true
        }else{arma.Other+=", +2 em em testes de diplomacia"
        arma.banhado=true}
        break
    case 12://cravejado de gemas
        if(!!arma.cravejado==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em testes de enganação"
            arma.cravejado=true
        }else{arma.Other+=", +2 em testes de enganação"
            arma.cravejado=true}
        break
    case 13://discreto
        if(!!arma.discreto==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="Ocupa -1 espaço e +5 para ocultar arma"
            arma.discreto=true
        }else{arma.Other+=", ocupa -1 espaço e +5 para ocultar arma"
            arma.discreto=true
    }
        break
    case 14://macabro
        if(!!arma.macabro==true){
            modificadores(arma)
        }else if(!!arma.Other==false){
            arma.Other="+2 em intimidação e -2 em diplomacia"
            arma.macabro=true
        }else{arma.Other="+2 em intimidação e -2 em diplomacia"
            arma.macabro=true
    }
        break
    case 15://penetrante
    if(!!arma.cruel==false||!!arma.penetrante==true){
        modificadores(arma)
    }
    if(!!arma.rd==true){arma.rd+=5}else{arma.rd=5}
    if(!!arma.Other==false){
        arma.Other=`Ignora 5 ponto de RD`
    }
    else{arma.Other+=`, ignora 5 ponto de RD`}
    arma.penetrante=true

        break
    case 16://material
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
        }else {arma.Other+=`, ignora 10 ponto de RD`}
        arma.material=true}
        break
        case 2://adamante
        if(!!arma.material==true){
            modificadores(arma)}else{
            passoUp(arma)
            arma.material=true}
        break
        case 3://gelo eterno
        if(!!arma.material==true){
            modificadores(arma)}else{
            if(!!arma.BonAtk==true){arma.BonAtk+=2}else{arma.BonAtk=2}
            if(!!arma.Other==false){
                arma.Other="Causa 2 pontos de dano por frio"
            }else{arma.Other+=", causa 2 pontos de dano por frio"}
        arma.material=true}
        break
        case 4://madeira tollon
        if(!!arma.material==true){
            modificadores(arma)}else{
                if(!!arma.Other==false){
                arma.Other="Conta como arma magica, habilidades ativadas ao atacar tem custo -1pm"
            }else{arma.Other+=", conta como arma magica, habilidades ativadas ao atacar tem custo -1pm"}
        arma.material=true}
        break
        case 5://matéria vermelha
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.danomaterial="1d6"
                if (!!arma.Other==false){
                    arma.Other="Causa +1d6 extra, mas causa 1 ponto de dano ao usar"
                }else{arma.Other+=", causa +1d6 extra, mas causa 1 ponto de dano ao usar"}
                arma.material=true}
        break
        case 6://mitral
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.material=true    
            arma.rCrit--
            }
            break
        case 7://casco de monstro
        if(!!arma.material==true){
            modificadores(arma)}else{
                arma.material=true
                if(!!arma.Other==false){
                    arma.Other="Conta como arma primitiva"                    
                }else{
                    arma.Other+=", conta como arma primitiva"
                }
            }
            break
        case 8://cristal de sol
        if(!!arma.material==true){
            modificadores(arma)}else{
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