import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axios from "axios";
export const UseBmiState = defineStore("bmi", () => {
  const bmi_person = ref(0);
  const person_detail = reactive({
    name: "",
    age: "",
    weight: "",
    height: "",
    gender: "",
    dateTime:""
  });

  async function bmi_calculate() {
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

    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    const email = userInfo?.email || "";
    const currentDateTime = new Date().toLocaleString(); 
    try {
      const response = await axios.post("http://localhost:5000/bmidata", {
        email: email,
        name: person_detail.name,
        age: person_detail.age,
        weight: person_detail.weight,
        height: person_detail.height,
        gender: person_detail.gender,
        bmi: bmi_person.value,
        dateTime: currentDateTime,
      });

      console.log("BMI data saved:", response.data);
    } catch (error) {
      console.error("Error saving BMI data:", error);
    }
  }

  return { person_detail, bmi_person, bmi_calculate };
});
