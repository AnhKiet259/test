import React, { useState } from "react";

import "./RegisterAccount.css";

import axios from 'axios';

const initFormValue = {
    title: 'TÀI KHOẢN ĐĂNG KÝ',
    type: 'object',
    required: ['firstName', 'lastName', 'email', 'password', 'confirmPassword'],
    properties: {
        firstName: { type: 'string', title: 'TÊN NGƯỜI DÙNG' },
        lastName: { type: 'string', title: 'HỌ NGƯỜI DÙNG' },
        email: { type: 'string', title: 'Email NGƯỜI DÙNG ' },
        password: { type: 'string', title: 'MÃ SỐ', format: 'password' },
        confirmPassword: { type: 'string', title: 'MÃ SỐ', format: 'password' },
        date: { type: Date, default: Date.now },
    },
};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export default function RegisterPage() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm = () => {
        const error = {};

        if (isEmptyValue(formValue.firstName)) {
            error["firstName"] = "first Name is required";
        }
        if (isEmptyValue(formValue.lastName)) {
            error["lastName"] = "last Name is required";
        }
        if (isEmptyValue(formValue.email)) {
            error["email"] = "email is required";
        } else {
            if (!isEmailValid(formValue.email)) {
                error["email"] = "Email is invalid";
            }
        }
        if (isEmptyValue(formValue.password)) {
            error["passWord"] = "Password is required";
        }
        if (isEmptyValue(formValue.confirmPassword)) {
            error["confirmPassword"] = "Confirm Password is required";
        } else if (formValue.confirmPassword !== formValue.password) {
            error["confirmPassword"] = "Confirm Password not match";
        }

        setFormError(error);

        return Object.keys(error).length === 0;
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post('https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/test', formValue);
                console.log('Đã gửi dữ liệu thành công:', response.data);
                // Thực hiện các xử lý tiếp theo, ví dụ: chuyển hướng, hiển thị thông báo thành công, vv.
            } catch (error) {
                console.error('Lỗi khi gửi dữ liệu:', error);
                // Xử lý lỗi và hiển thị thông báo lỗi cho người dùng
            }
        } else {
            console.log("form invalid");
        }
    };

    console.log(formError);

    return (
        <div className="register-page">
            <div className="register-form-container">
                <h1 className="title">Register account </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="First-name" className="form-label">
                            First Name
                        </label>
                        <input
                            id="first-name"
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={formValue.firstName}
                            onChange={handleChange}
                        />
                        {formError.firstName && (
                            <div className="error-feedback">{formError.firstName}</div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="last-name" className="form-label">
                            Last Name
                        </label>
                        <input
                            id="last-name"
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={formValue.lastName}
                            onChange={handleChange}
                        />
                        {formError.lastName && (
                            <div className="error-feedback">{formError.lastName}</div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-control"
                            type="text"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                        {formError.email && (
                            <div className="error-feedback">{formError.email}</div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            className="form-control"
                            type="password"
                            name="password"
                            value={formValue.password}
                            onChange={handleChange}
                        />
                        {formError.passWord && (
                            <div className="error-feedback">{formError.passWord}</div>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="confirm-password" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            value={formValue.confirmPassword}
                            onChange={handleChange}
                        />
                        {formError.confirmPassword && (
                            <div className="error-feedback">{formError.confirmPassword}</div>
                        )}
                    </div>
                    <button type="submit" className="submit-btn">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}