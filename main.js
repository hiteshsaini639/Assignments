class Student{
    static count=0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name=name;
        this.age=age;
        this.phoneNumber=phoneNumber;
        this.boardMarks=boardMarks;
        Student.count++;
    }
    static numberOfStudent(){
        console.log(`number of students is ${Student.count}`);
    }
    collegeEligiblity(){
        if(this.boardMarks>40)
        console.log('Eligible');
        else
        console.log('Not eligible');
    }

}
let student=new Student(5);
student[0]=new Student('Hitesh',25,'23422342',67);
student[1]=new Student('Shweta',14,'3345455',98);
student[2]=new Student('Mohit',24,'3456643',95);
student[3]=new Student('Tanishk',11,'234544365',90);
student[4]=new Student('Pradeep',27,'23455687',33);

function eligibleForPlacement(marksSetByCompany){
    return function(ageSetByCompany){
        if(this.boardMarks>marksSetByCompany && this.age>ageSetByCompany)
        console.log('Eligible for placement');
        else
        console.log('Not eligible for placement');
    }
}
let companyGoogle=eligibleForPlacement(90);
let companyTCS=eligibleForPlacement(60);
for(let i=0;i<5;i++){
    companyGoogle.call(student[i],20);
}

for(let i=0;i<5;i++){
    companyTCS.call(student[i],20);
}