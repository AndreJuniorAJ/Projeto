//function ePaisagem(){
//    const largura = 40;
//    const altura = 10;
//
//    if(largura > altura){
//        console.log('Imagem está no modo paisagem');
//    } else {
//        console.log('Imagem não está no modo paisagem!!');
//    }
//};

//ePaisagem();

//################### usando arrow function
const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem(1080, 1920));