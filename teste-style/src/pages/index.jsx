import { useState,useEffect,useMemo,useCallback} from "react";


const Teste = () => {

    //useState utilizado para manipular estados 
    
    const [nome, SetNome ] = useState('Breno');
    const [age, Setage ] = useState(10);


    //prev pega o estado atual;
    const clickRetornoNome = useCallback(() =>{
        console.log('ALterou nome',nome)
        SetNome(prev => prev === 'Breno' ? 'jose' : 'Breno');
    },[])   

    //useMEmo = referencia em variaveis
    // Callback = referencia a funcao 
    const clickRetornoIDade = useCallback(() =>{
        const newAge = age + 1 - 1 + 20;
        console.log('Atual',age,newAge);
        Setage(prev => prev ===  10 ? 36 : 10);
    },[age])  




//     //useMemo serve para salvar um certa funcao para nao ficar renderizando toda vez.
//     const calc = useMemo(() => {
//         console.log('Rendezireo');
//         return 5 * age
//     },[age]);

//     //ELe memoriza uma funcao
//    // useCallback

//     console.log('Renderizou 1',calc);

//     useEffect(() =>{
//         //alert('Ola mundo');

    
//     },[nome]);

    return (
        <>
            <div>Nome: {nome}</div>
            <div> IDade: {age}</div>

            <button onClick={clickRetornoNome}>Clicar </button>
            <button onClick={clickRetornoIDade}>Clicar IDade</button>

        </>
        
    )
    
}


export { Teste } ;