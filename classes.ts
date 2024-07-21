// BaseClass
abstract class Department {
    protected employees: string[] = [];

    static createEmployee(name: string) {
        return { name: name };
    }

    // クラスがインスタンス化された際に実施される処理を記載する
    constructor(protected id:string, public name: string) {

    }

    // 従業員のIDと名前を出力するメソッド
    abstract describe(this: Department): void;

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

    describe() {
        console.log('ここはIT部署に関する記載が入ります。' + this.id);
    };
}

// SubClass(会計特化の部署に関するクラス)
class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;

    // setter
    set mostRecentReport(value:string) {
        if (!value) {
            throw new Error("正しい値を設定してください");
        }
        this.addReport(value);
    }

    // getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting')
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment('1002', []);
        return this.instance;
    }

    // 従業員のIDと名前を出力するメソッド
    describe() {
        console.log('ここは会計部署に関する記載が入ります。' + this.id);
    };

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
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

// staticメソッドの呼び出し
const employee1 = Department.createEmployee('原田 亮介');
console.log(employee1);

// クラスをインスタンス化
const it = new ITDepartment('1001', ['adminプロパティに追加されます。']);

it.addEmployee('Max');
it.addEmployee('Mary');
it.describe();
it.printEmployeeInformation();

console.log(it);

// クラスをインスタンス化
const accounting = AccountingDepartment.getInstance();



// accounting.addReport('林');
// accounting.addReport('佐藤');
accounting.printReports();
accounting.addEmployee('Max');
accounting.describe();

console.log(accounting);

// setter
accounting.mostRecentReport = '通気会計レポート';

// getter
console.log(accounting.mostRecentReport);

