// BaseClass
class Department {
    protected employees: string[] = [];

    // クラスがインスタンス化された際に実施される処理を記載する
    constructor(private id:string, public name: string) {

    }

    // 従業員のIDと名前を出力するメソッド
    describe(this: Department) {
        console.log(`Department (${this.id}) : ${this.name}`);
    }

    // 従業員名を追加するメソッド
    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    // 従業員名(配列)と数値を出力するメソッド
    printEmployeeInformation() {
        console.log(this.employees);
        console.log(this.employees.length);
    }
}



// SubClass(IT特化の部署に関するクラス)
class ITDepartment extends Department {
    // クラスの中のプロパティを作成する
    admin: string[];

    constructor(id: string, admin: string[]) {
        super(id, 'IT');
        this.admin = admin;
    }
}

// SubClass(会計特化の部署に関するクラス)
class AccountingDepartment extends Department {

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
        console.log(this.reports.length);
    }

    // 従業員名を追加するメソッド
    addEmployee(employee: string) {
        if (employee === 'Max') {
            return console.log('Maxの追加はできません');
        }

        this.employees.push(employee);
    }
}

// クラスをインスタンス化
const it = new ITDepartment('1001', ['adminプロパティに追加されます。']);

it.addEmployee('Max');
it.addEmployee('Mary');
it.describe();
it.printEmployeeInformation();

console.log(it);

// クラスをインスタンス化
const Accounting = new AccountingDepartment('1002', ['reportsプロパティに追加されます。']);

Accounting.addReport('林');
Accounting.addReport('佐藤');
Accounting.printReports();
Accounting.addEmployee('Max');

console.log(Accounting);