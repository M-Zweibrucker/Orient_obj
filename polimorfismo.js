class Atleta {
    peso;
    catagoria;

    constructor(peso, catagoria) {
            this.peso = peso;
            this.catagoria = catagoria;
        }

    definirCategoria(){
        if (this.peso < 52.2) {
                    this.catagoria = "Inválido";
                } else if (this.peso >= 52.2 && this.peso <= 70.3) {
                    this.catagoria = "Infantil";
                } else if (this.peso >= 70.4 && this.peso <= 83.9) {
                    this.catagoria = "Juvenil";
                } else if (this.peso >= 84.0 && this.peso <= 120.2) {
                    this.catagoria = "Adulto";
                } else {
                    this.catagoria = "Inválido";
                }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }
    definirCategoria(){
        if (this.peso < 52.2) {
                    this.catagoria = "Inválido";
                } else if (this.peso >= 52.2 && this.peso <= 70.3) {
                    this.catagoria = "Leve";
                } else if (this.peso >= 70.4 && this.peso <= 83.9) {
                    this.catagoria = "Médio";
                } else if (this.peso >= 84.0 && this.peso <= 120.2) {
                    this.catagoria = "Pesado";
                } else {
                    this.catagoria = "Inválido";
                }
    }
}