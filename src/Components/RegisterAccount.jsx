import React, { useState } from "react";

import "./RegisterAccount.css";
import logore from './picgo.png';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export default function RegisterPage({ }) {

    const [formValue, setFormValue] = useState({});
    const [formError, setFormError] = useState({});
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);

    const toggleModal1 = () => {
        setModalVisible1(!modalVisible1); // Toggle the modal visibility state
    };
    const toggleModal2 = () => {
        setModalVisible2(!modalVisible2); // Toggle the modal visibility state
    };

    const validateForm = () => {
        const error = {};

        if (isEmptyValue(formValue.username) || isEmptyValue(formValue.firstname)
            || isEmptyValue(formValue.lastname)
            || isEmptyValue(formValue.email) || isEmptyValue(formValue.phone)
            || isEmptyValue(formValue.password)) {
            toggleModal1();
            error["password"] = "Error: Please Fill All Information";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
            date: new Date().toISOString()
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString();

        if (validateForm()) {
            try {

                const userData = {
                    username: formValue.username,
                    firstname: formValue.firstname,
                    lastname: formValue.lastname,
                    birthdate: formValue.birthdate,
                    email: formValue.email,
                    phone: formValue.phone,
                    password: formValue.password,
                    date: formattedDate,
                    role: 0,
                };
                const response = await axios.post('https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/Log_in', userData);

                console.log('Đã gửi dữ liệu thành công:', response.data);
                // Xóa thông tin trong form sau khi gửi thành công
                setFormValue({
                    username: '',
                    firstname: '',
                    lastname: '',
                    birthdate: '',
                    email: '',
                    phone: '',
                    password: '',
                });
                toggleModal2();
                // Thực hiện các xử lý tiếp theo, ví dụ: chuyển hướng, hiển thị thông báo thành công, vv.
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu:', error);
                // Xử lý lỗi và hiển thị thông báo lỗi
            }
        }
    };


    console.log(formError);

    return (
        <div class="container43 login-formz">
            <div class="left-column login1001-pic">
                <img src={logore} alt='Logo' />
            </div>
            <div class="right-column">
                <div class="limiter " >
                    <form onSubmit={handleSubmit}>
                        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#A2A0A0' }}>Register</h1>
                        <div class="form-groupz">
                            <input className="textz" id="username" name="username"
                                placeholder="Username" value={formValue.username} onChange={handleChange} />
                        </div>
                        <div class="form-groupz">
                            <div style={{ display: 'flex' }}>
                                <input
                                    className="textz"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formValue.firstname}
                                    onChange={handleChange}
                                />
                                <input
                                    className="textz"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Last Name"
                                    style={{ marginLeft: '10px' }}
                                    value={formValue.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div class="form-groupz">
                            <input className="textz" id="email" name="email"
                                placeholder="Email" value={formValue.email} onChange={handleChange} />
                        </div>

                        <div class="form-groupz">
                            <div style={{ display: 'flex' }}>
                                <DatePicker
                                    className="textz"
                                    id="birthdate"
                                    name="birthdate"
                                    placeholderText="Date of Birth"
                                    selected={formValue.birthdate}
                                    onChange={(date) => {
                                        const formattedDate = date.toISOString();
                                        setFormValue((prevFormValue) => ({
                                            ...prevFormValue,
                                            birthdate: formattedDate,
                                        }));
                                    }}
                                />
                                <input className="textz" id="phone" name="phone"
                                    placeholder="Phone" style={{ marginLeft: '10px' }} value={formValue.phone} onChange={handleChange} />
                            </div>
                        </div>
                        <div class="form-groupz">
                            <input className="textz" type="password" id="password" name="password"
                                placeholder="Password" value={formValue.password} onChange={handleChange} />
                        </div>

                        {/* {formError.password && (
                            <div className="error-feedback">{formError.password}</div>
                        )} */}
                        {modalVisible1 && (
                            <div className="modal">
                                <div className="modal-content">
                                    <i class="uil uil-annoyed modalicon" style={{ width: "200px" }}></i>
                                    <h2>Lưu Ý</h2>
                                    <p>Vui lòng điền đầy đủ thông tin cá nhân</p>
                                    <button className="modal-close" onClick={toggleModal1}>
                                        Đóng
                                    </button>
                                </div>
                            </div>
                        )}
                        {modalVisible2 && (
                            <div className="modal">
                                <div className="modal-content">
                                    <i class="uil uil-check-circle modalicon" style={{ width: "200px", color: 'green' }}></i>
                                    <h2>Thành Công</h2>
                                    <p>Bạn đã đăng kí tài khoản thành công !</p>
                                    <button className="modal-close" onClick={toggleModal2}>
                                        Đóng
                                    </button>
                                </div>
                            </div>
                        )}


                        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button style={{ width: '60%' }} className='buttonz' type="submit">Đăng Kí</button>
                        </div>
                        <div style={{ textAlign: "center", paddingTop: "10px" }}>
                            <a style={{
                                color: 'white',
                                fontSize: '10px',
                                textDecoration: 'underline',
                                transition: '0.3s',
                                cursor: 'pointer',
                            }}
                                onMouseEnter={(e) => e.target.style.color = '#43d2e8'}
                                onMouseLeave={(e) => e.target.style.color = 'white'}
                            >
                                Already Have Account ?
                            </a>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}