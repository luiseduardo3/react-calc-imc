export type Level = {
    titulo: string;
    cor: string;
    icone: 'down' | 'up';
    imc: number[],
    seuImc?: number;
}

export const levels: Level[] = [
    { titulo: 'Magreza', cor: '#96A3AB', icone: 'down', imc: [0, 18.5] },
    { titulo: 'Normal', cor: '#0EAD69', icone: 'up', imc: [18.6, 24.9] },
    { titulo: 'Sobrepeso', cor: '#E2B039', icone: 'down', imc: [25, 30] },
    { titulo: 'Obesidade', cor: '#C3423F', icone: 'down', imc: [30.1, 99] }
];

export const calcularImc = (altura: number, peso: number) => {
    // const imc = Math.round((peso / (altura * altura) * 10) / 10);
    const imc = peso / (altura * altura);
    

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy: Level = {...levels[i]};
            levelCopy.seuImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}