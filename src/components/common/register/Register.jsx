// Register.js
import React from "react";
//import { Link } from "react-router-dom";
import './register.css'
<script src="form_validation.js"></script>

const Register = () => {
    return (
        <>
            {/* <div> */}
            {/* ส่วนอื่น ๆ ของ Register Component */}
            {/*             <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div> */}
            <section conload="document.registration.userid.focus();">
                <div class="container text-center">
                    <div class="regis-card">
                        <div className="card-header bg-info">
                            <h1 style={{ borderBottom: '1px solid black', paddingBottom: '5px' }}>สมัครสมาชิก</h1>
                        </div>
                        <div class="card-body">
                            <form name='registration' onSubmit="return formValidation();">
                                <ul>
                                    <li className="aaaa">
                                        <label for="ประเภท">ประเภท:</label>
                                        <div class="select-wrapper">
                                            <select class="cat" name="category">
                                                <option selected="" value="Default">(กรุณาเลือก)</option>
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
                                        <label for="คำนำหน้า">คำนำหน้า:</label>
                                        <div class="select-wrapper">
                                            <select class="mb-2" name="prefix">
                                                <option selected="" value="Default">(กรุณาเลือก)</option>
                                                <option value="นาย">นาย</option>
                                                <option value="นาง">นาง</option>
                                                <option value="นางสาว">นางสาว</option>
                                                <option value="อื่นๆ">อื่นๆ</option>
                                            </select>
                                        </div>
                                    </li>
                                </ul>

                                <li><label for="name">ชื่อ</label>
                                    <input type="text" name="name" size="12" id="name" />
                                </li>

                                <li><label for="lastname">นามสกุล:</label>
                                    <input type="text" name="lastname" size="50" id="lastname" />
                                </li>

                                <li><label for="lastname">เลขประจำตัวผู้เสียภาษี:</label>
                                    <input type="text" name="lastname" size="50" id="id" />
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

                                <li><label for="address">ที่อยู่:</label>
                                    <input type="text" name="address" size="50" id="address" />
                                </li>

                                <li><label for="tel">เบอร์โทรศัพท์:</label>
                                    <input type="text" name="tel" size="50" id="tel" />
                                </li>

                                <li><label for="email">อีเมล</label>
                                    <input type="text" name="email" size="50" id="email" />
                                </li>

                                <li><label for="passid">ตั้งค่ารหัสผ่าน</label>
                                    <input type="password" name="passid" size="12" id="passid" />
                                </li>

                                {/* <li><label for="desc">About:</label></li>
                                <li><textarea name="desc" id="desc"></textarea></li>
                                <li><input class="btn btn-primary btn-lg" type="submit" name="submit" value="Submit" /></li> */}
                            </form>
                        </div>
                        <button type="submit" id="submit-btt">สมัครสมาชิก</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register;