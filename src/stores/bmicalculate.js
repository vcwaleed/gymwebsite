import {defineStore} from 'pinia'
import {ref , computed , reactive} from 'vue'

export const UseBmiState = defineStore("bmi",()=>{
const bmi_person =ref(0);
 const  person_detail =reactive({
    name: "",
    age: '',
    weight: '',
    height: '',
    gender: ""
 });
 function bmi_calculate() {
    if (!person_detail.weight || !person_detail.height || person_detail.height <= 0) {
        bmi_person.value = 0;
        return;
    }
    const height_val = person_detail.height / 100; 
    let bmi = person_detail.weight / (height_val * height_val); 
    let ageFactor = 0;
    if (person_detail.age < 18) ageFactor = 0.05;
    else if (person_detail.age > 65) ageFactor = 0.03;
    let genderFactor = person_detail.gender === "female" ? 0.02 : 0;
    bmi_person.value = (bmi * (1 + ageFactor + genderFactor)).toFixed(2);
}

return{person_detail,bmi_person ,bmi_calculate}

})
