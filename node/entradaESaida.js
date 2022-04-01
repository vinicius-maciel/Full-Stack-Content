const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace(/\n/g, '').replace(/\r/g, ''); // .replace(/[\n\r]/g,' ');

        process.stdout.write(`Fala ${nome}!!`)
        process.exit()
    })
}