class Patient {
    constructor(s, n, sn, sex, dob, stv) {
        this.S = s;
        this.N = n;
        this.SN = sn;
        this.Sex = sex;
        this.DoB = new Date(dob);
        this.StV = stv;
    }
    setbyid() {
        document.getElementById("S").textContent = this.S
        document.getElementById("N").textContent = this.N
        document.getElementById("SN").textContent = this.SN
        document.getElementById("Sex").textContent = this.Sex
        document.getElementById("DoB").textContent = this.DoB.getFullYear()
        document.getElementById("StV").textContent = this.StV
    }
}
let Иванов = new Patient("Иванов",  "Иван", "Иванович","M", new Date(1974,05,15), "Исполнено")
let Бураева = new Patient("Бураева", "Милена", "Гарегиновна", 'F', new Date(2002,02,22), "Медотвод")
let Макарова = new Patient("Макарова", "Софья", "Сергеевна","F", new Date(2002,09,03), "Назначено")
Иванов.setbyid();
Бураева.setbyid();
Макарова.setbyid();