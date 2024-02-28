import React, { useState, useEffect } from 'react';
import "./ListAccount.css";
import usavtar from './usav.png';

function ListAccount() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/GET_Data_login')
            .then(response => response.json())
            .then(data => {
                setData(data[0].public.input.jsondata);
                setFilteredData(data[0].public.input.jsondata); // Khởi tạo filteredData ban đầu là toàn bộ dữ liệu
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        // Lọc dữ liệu dựa trên firstName
        const filtered = Object.keys(data).filter(key => data[key].firstName.toLowerCase().includes(value.toLowerCase()));
        console.log('Search term:', value);
        console.log('Data:', data);
        console.log('Filtered data:', filtered);
        setFilteredData(filtered.reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {}));
    };


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const deleteUser = (firstName) => {
        // Tìm người dùng dựa trên firstName
        let userToDelete = null;
        for (const key in filteredData) {
            if (filteredData[key].firstName === firstName) {
                userToDelete = filteredData[key];
                break;
            }
        }

        // Kiểm tra xem người dùng có tồn tại không
        if (!userToDelete) {
            console.error('User not found. Filtered data:', filteredData);
            return;
        }

        // Gửi yêu cầu DELETE đến API với id của người dùng cần xóa
        fetch(`https://asia-south1.gcp.data.mongodb-api.com/app/application-0-iatxy/endpoint/DELETE_ACCOUNT/${userToDelete._id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    fetchData(); // Fetch lại dữ liệu sau khi xóa
                    console.log('User deleted successfully.');
                } else {
                    console.error('Failed to delete user.');
                }
            })
            .catch(error => {
                console.error('Delete error:', error);
            });
    };




    return (
        <div>
            <link rel='stylesheet' href='https://unicons.iconscout.com/release/v4.0.0/css/line.css' />
            <div className='title'>
                <i className='uil uil-tachometer-fast-alt'></i>
                <span className='text'>Manage Users</span>
            </div>
            <div className='cover' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='search-box1' style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <i className='uil uil-search'></i>
                    <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search User By FirstName" />
                </div>

                <div className="toggle-password" style={{ marginLeft: '10px' }}>
                    <button type="button" className={showPassword ? "active button4" : "button3"} onClick={toggleShowPassword}>
                        {showPassword ? <><i class="uil uil-eye-slash"></i> Hide Password</> : <><i className="uil uil-eye"></i> Show Password</>}
                    </button>
                </div>
            </div>
            <div class="grid-container">
                {Object.keys(filteredData).map(key => (
                    <div key={key} className='tagUser'>
                        <div className='logous'>
                            <img src={usavtar} alt='Logo' />
                        </div>
                        <h2>{filteredData[key].firstName} {filteredData[key].lastName}</h2>
                        <p>First Name: {filteredData[key].firstName}</p>
                        <p>Last Name: {filteredData[key].lastName}</p>
                        <p>Email: {filteredData[key].email}</p>
                        <p>Password: {showPassword ? filteredData[key].password : "*********"}</p>
                        <div>
                            <button className='button1'>Update</button>
                            <button className='button2' onClick={() => deleteUser(filteredData[key]._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListAccount;
