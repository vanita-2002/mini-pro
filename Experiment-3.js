function validateTagline(value) {
    if (value.length > 30) {
      alert("Tagline shouldn't exceed 30 characters!");
    }
  }
  
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      document.getElementById("email-error").textContent = "";
      return true;
    }
    document.getElementById("email-error").textContent =
      "Please enter a valid email.";
    return false;
  }
  
  function validatePhone(phone) {
    if (phone.length > 10 || phone.length < 10) {
      document.getElementById("phone-error").textContent =
        "Please enter a valid phone number.";
    } else {
      document.getElementById("phone-error").textContent = "";
    }
  }
  function validatePhone(phoney) {
    if (phoney.length > 12 || phone.length < 12) {
      document.getElementById("phone-error").textContent =
        "Please enter a valid  aadhar - number.";
    } else {
      document.getElementById("phone-error").textContent = "";
    }
  }
  
  function generateReceipt() {
    modal.style.display = "block";
    document.getElementById("tgline").textContent =
      document.getElementById("tagline").value;
  
    let qty = document.getElementById("quantity").value;
    let size = document.getElementById("size").value;
    document.getElementById("qty").textContent = qty;
    document.getElementById("siz").textContent = size;
    let price = qty * size;
    document.getElementById("price").textContent = price;
    document.getElementById("addr").textContent =
      document.getElementById("address").value;
  
    let date = new Date();
    document.getElementById("date").textContent = date.toLocaleDateString();
  }
  
  // Get the modal
  let modal = document.getElementById("myModal");
  
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  class Person {
    constructor(first_name, last_name, age) {
      this.first_name = first_name;
      this.last_name = last_name;
      this.age = age;
    }
  
    domain(profession) {
      console.log(
        `${this.first_name} ${this.last_name} aged ${this.age} works as ${profession}`,
      );
    }
  }
  
  const person1 = new Person("Sahil", "Pabale", 19);
  const person2 = new Person("John", "Doe", 38);
  
  console.log(person1.domain("Engineer"));
  console.log(person2.domain("Doctor"));
  
  class Student extends Person {
    constructor(first_name, last_name, age, roll_num) {
      super(first_name, last_name, age);
      if (!Number(roll_num)) {
        throw new Error("Roll number incorrect");
      }
    }
  
    domain(branch) {
      console.log(
        `${this.first_name} ${this.last_name} aged ${this.age} studies in ${branch} branch`,
      );
    }
  }
  try {
    const stud1 = new Student("sahil", "pabale", 12, "sa"); // generates error when NaN is passed
  } catch (error) {
    console.warn("error >>> ", error);
  }
  const stud2 = new Student("john", "doe", 18, 17); // generates error when NaN is passed
  stud2.domain("computer");
