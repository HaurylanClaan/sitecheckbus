//site servicos 
document.addEventListener('DOMContentLoaded', function() {
    // selecao botao
    var btnEnviar = document.getElementById('enviar');

    // evento botao clicar
    btnEnviar.addEventListener('click', function() {
        console.log("Botão enviar clicado");

        // capturar valores seletor
        var turno = document.getElementById('turno').value;
        var numeroOnibus = document.getElementById('numero_onibus').value;
        var opcaoSelecionada = document.getElementById('opcao_desejada').value;
        
        // titulo
        var tituloTabela = '';

        // verificar selecao
        if (opcaoSelecionada === 'horarios') {
            tituloTabela = 'Horários dos Ônibus';
        } else if (opcaoSelecionada === 'rota') {
            tituloTabela = 'Rotas dos Ônibus';
        }

        // criar tabela com titulo
        var tabelaHTML = '<h2>' + tituloTabela + '</h2>' +
                        '<table border="1">' +
                            '<thead>' +
                                '<tr>' +
                                    '<th>Turno</th>' +
                                    '<th>Número do Ônibus</th>' +
                                    '<th>Opção Selecionada</th>' +
                                '</tr>' +
                            '</thead>' +
                            '<tbody>' +
                                '<tr>' +
                                    '<td>' + turno + '</td>' +
                                    '<td>' + numeroOnibus + '</td>' +
                                    '<td>' + opcaoSelecionada + '</td>' +
                                '</tr>' +
                            '</tbody>' +
                        '</table>';

        //exibir tabela 
        document.getElementById('tabelaservicos').innerHTML = tabelaHTML;
    });
});
