function calculate() {
    const total = parseFloat(document.getElementById('totalAmount').value) || 0;
    const people = parseInt(document.getElementById('people').value) || 1;
    const hasService = document.getElementById('serviceTax').checked;

    let finalValue = total;

    if (hasService) {
        finalValue = total * 1.10; // Adiciona 10%
    }

    const perPerson = finalValue / people;

    document.getElementById('perPerson').innerText = perPerson.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}