// Register.js
import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        category: 'Default',
        prefix: 'Default',
        name: '',
        lastname: '',
        id: '',
        address: '',
        tel: '',
        email: '',
        passid: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;  
        
        // Check if the selected value is "Default" and prevent setting it in the state
        if (value !== 'Default') {
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate form data
        if (formValidation()) {
          try {
            const response = await fetch('http://localhost:3001/api/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
    
            if (response.ok) {
              alert('Registration successful');
            } else {
              alert('Registration failed');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          alert('Validation failed. Please check your inputs.');
        }
      };
    
    const formValidation = () => {
        console.log('Form Data:', formData);
        // Validate 'category'
        if (formData.category === 'Default') {
            alert('Please select a category');
            return false;
        }

        // Validate 'prefix'
        if (formData.prefix === 'Default') {
            alert('Please select a prefix');
            return false;
        }

        // Validate 'name'
        if (!formData.name.trim()) {
            alert('Name cannot be empty');
            return false;
        }

        // Validate 'lastname'
        if (!formData.lastname.trim()) {
            alert('Lastname cannot be empty');
            return false;
        }

        // Validate 'id'
        if (!formData.id.trim()) {
            alert('ID cannot be empty');
            return false;
        }

        // Validate 'address'
        if (!formData.address.trim()) {
            alert('Address cannot be empty');
            return false;
        }

        // Validate 'tel'
        if (!formData.tel.trim()) {
            alert('Telephone cannot be empty');
            return false;
        }

        // Validate 'email'
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!formData.email.match(emailRegex)) {
            alert('Invalid email address');
            return false;
        }

        // Validate 'passid'
        if (formData.passid.trim().length < 5 || formData.passid.trim().length > 12) {
            alert('Password should be between 5 to 12 characters');
            return false;
        }

        // Add more validation rules as needed

        // If all validations pass, return true
        return true;
    };

    return (
        <>
            {/* <div> */}
            {/* ส่วนอื่น ๆ ของ Register Component */}
            {/*             <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div> */}
            <section conload="document.registration.userid.focus();">
                <div className="container text-center">
                    <div className="regis-card">
                        <div className="card-header bg-info">
                            <h1 style={{ borderBottom: '1px solid black', paddingBottom: '5px' }}>สมัครสมาชิก</h1>
                        </div>
                        <div className="card-body">
                            <form name='registration'>
                                <ul>
                                    <li className="aaaa">
                                        <label htmlFor="category">ประเภท:</label>
                                        <div className="select-wrapper">
                                            <select className="cat" name="category" id="category" value={formData.category} onChange={handleChange}>
                                                {/* <option selected="" value="Default">(กรุณาเลือก)</option> */}
                                                <option value="Default">(กรุณาเลือก)</option>
                                                <option value="บุคคลธรรมดา">บุคคลธรรมดา</option>
                                                <option value="บริษัทจำกัด">บริษัทจำกัด</option>
                                                <option value="บริษัทมหาชนจำกัด">บริษัทมหาชนจำกัด</option>
                                                <option value="ห้างหุ้นส่วนสามัญ">ห้างหุ้นส่วนสามัญ</option>
                                                <option value="ห้างหุ้นส่วนจำกัด">ห้างหุ้นส่วนจำกัด</option>
                                                <option value="ร้านค้า">ร้านค้า</option>
                                                <option value="สถาบันการศึกษา">สถาบันการศึกษา</option>
                                                <option value="รัฐวิสาหกิจ">รัฐวิสาหกิจ</option>
                                                <option value="ภาครัฐ">ภาครัฐ</option>
                                                <option value="คณะบุคคล">คณะบุคคล</option>
                                                <option value="ชมรม">ชมรม</option>
                                                <option value="สมาคม">สมาคม</option>
                                                <option value="มูลนิธิ">มูลนิธิ</option>
                                                <option value="อื่นๆ">อื่นๆ</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>

                                <ul>
                                    <li className="bbbb">
                                        <label htmlFor="prefix">คำนำหน้า:</label>
                                        <div className="select-wrapper">
                                            <select className="mb-2" name="prefix" id="prefix" value={formData.prefix} onChange={handleChange}>
                                                <option selected="" value="Default">(กรุณาเลือก)</option>
                                                <option value="นาย">นาย</option>
                                                <option value="นาง">นาง</option>
                                                <option value="นางสาว">นางสาว</option>
                                                <option value="อื่นๆ">อื่นๆ</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>

                                <li><label htmlFor="name">ชื่อ</label>
                                    <input type="text" name="name" size="12" id="name" onChange={handleChange} />
                                </li>

                                <li><label htmlFor="lastname">นามสกุล:</label>
                                    <input type="text" name="lastname" size="50" id="lastname" onChange={handleChange} />
                                </li>

                                <li><label htmlFor="id">เลขประจำตัวผู้เสียภาษี:</label>
                                    <input type="text" name="id" size="50" id="id" onChange={handleChange} />
                                </li>

                                {/* <div class="col-lg-8 col-md-8 pl-4">                        
                                    <input type="hidden" name="id" id="id">
                                        <div class="mb-2 d-flex">
                                            <input type="text" tabindex="0" pattern="\d*" inputmode="numeric" name="id_passport[0]" value="" class="inputN mr-2 mr-lg-3" maxlength="1" autocomplete="off"/>

                                            <input type="text" tabindex="1" pattern="\d*" inputmode="numeric" name="id_passport[1]" value="" class="inputN psl" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="2" pattern="\d*" inputmode="numeric" name="id_passport[2]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="3" pattern="\d*" inputmode="numeric" name="id_passport[3]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="4" pattern="\d*" inputmode="numeric" name="id_passport[4]" value="" class="inputN psr  mr-2 mr-lg-3" maxlength="1" autocomplete="off"/>

                                            <input type="text" tabindex="5" pattern="\d*" inputmode="numeric" name="id_passport[5]" value="" class="inputN psl" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="6" pattern="\d*" inputmode="numeric" name="id_passport[6]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="7" pattern="\d*" inputmode="numeric" name="id_passport[7]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="8" pattern="\d*" inputmode="numeric" name="id_passport[8]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="9" pattern="\d*" inputmode="numeric" name="id_passport[9]" value="" class="inputN psr  mr-2 mr-lg-3" maxlength="1" autocomplete="off"/>

                                            <input type="text" tabindex="10" pattern="\d*" inputmode="numeric" name="id_passport[10]" value="" class="inputN psl" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="11" pattern="\d*" inputmode="numeric" name="id_passport[11]" value="" class="inputN psm" maxlength="1" autocomplete="off"/>
                                            <input type="text" tabindex="12" pattern="\d*" inputmode="numeric" name="id_passport[12]" value="" class="inputN psr" maxlength="1" autocomplete="off"/>
                                        </div> 
                                    </input>               
                                </div> */}

                                <li><label htmlFor="address">ที่อยู่:</label>
                                    <input type="text" name="address" size="50" id="address" onChange={handleChange} />
                                </li>

                                <li><label htmlFor="tel">เบอร์โทรศัพท์:</label>
                                    <input type="text" name="tel" size="50" id="tel" onChange={handleChange} />
                                </li>

                                <li><label htmlFor="email">อีเมล</label>
                                    <input type="text" name="email" size="50" id="email" onChange={handleChange} />
                                </li>

                                <li><label htmlFor="passid">ตั้งค่ารหัสผ่าน</label>
                                    <input type="password" name="passid" size="12" id="passid" onChange={handleChange} />
                                </li>

                                {/* <li><label for="desc">About:</label></li>
                                <li><textarea name="desc" id="desc"></textarea></li>
                                <li><input class="btn btn-primary btn-lg" type="submit" name="submit" value="Submit" /></li> */}
                            </form>
                        </div>
                        <button type="submit" id="submit-btt" onClick={handleSubmit}>สมัครสมาชิก</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;