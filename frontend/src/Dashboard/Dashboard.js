import React from 'react'
import './Dashboard.css'
import logo from '../assets/logo.png'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-4.jpg'


const Dashboard = () => {
    return (
        <div class="container">
        <aside>
            <div class="top">
                <div class="logo">
                    <img src={logo} alt="" />
                    <h2>EGA<span class="danger">TOR</span></h2>
                </div>
                <div class="close" id="close-btn">
                    <span class="material-icons-sharp">close</span>
                </div>
            </div>


            <div class="sidebar">
                <a href="#">
                    <span class="material-icons-sharp">grid_view</span>
                    <h3>DashBoard</h3>
                </a>
                <a href="#" class="active">
                    <span class="material-icons-sharp">person_outline</span>
                    <h3>Customers</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">receipt_long</span>
                    <h3>Orders</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">insights</span>
                    <h3>Analytics</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">mail_outline</span>
                    <h3>Messages</h3>
                    <span class="message-count">26</span>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">inventory</span>
                    <h3>Products</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">report</span>
                    <h3>Reports</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">add</span>
                    <h3>Add Products</h3>
                </a>
                <a href="#">
                    <span class="material-icons-sharp">logout</span>
                    <h3>logout</h3>
                </a>
            </div>
        </aside>
        {/* <!-------------  END OF ASIDE  ----------> */}
        <main>
            <h1>DashBoard</h1>

            <div class="date">
                {/* <input type="date"> */}
            </div>

            <div class="insights">
                <div class="sales">
                    <span class="material-icons-sharp">analytics</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Sales</h3>
                            <h1>$25,024</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>81%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF SALES --> */}
                <div class="expenses">
                    <span class="material-icons-sharp">bar_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Expenses</h3>
                            <h1>$14,194</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>62%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF EXPENSES --> */}
                <div class="income">
                    <span class="material-icons-sharp">stacked_line_chart</span>
                    <div class="middle">
                        <div class="left">
                            <h3>Total Incomes</h3>
                            <h1>$17,811</h1>
                        </div>
                        <div class="progress">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="number">
                                <p>47%</p>
                            </div>
                        </div>
                    </div>
                    <small class="text-muted">Last 24 Hours</small>
                </div>
                {/* <!-- END OF INCOME --> */}
            </div>
            {/* <!----------- END OF INSIGHTS -------------> */}

            <div class="orders">
                <h2>Recent Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Number</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>81641</td>
                            <td>Due</td>
                            <td class="war">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>69001</td>
                            <td>Due</td>
                            <td class="war">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>12346</td>
                            <td>Due</td>
                            <td class="war">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>52921</td>
                            <td>Due</td>
                            <td class="war">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Foldable Mini Drone</td>
                            <td>33911</td>
                            <td>Due</td>
                            <td class="war">Pending</td>
                            <td class="primary">Details</td>
                        </tr>
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
        </main>
        {/* <!---------------- END OF MAIN -----------> */}

        <div class="right">
            <div class="top">
                <button id="menu-btn">
                    <span class="material-icons-sharp">menu</span>
                </button>
                <div class="theme-toggler">
                    <span class="material-icons-sharp" id="light">light_mode</span>
                    <span class="material-icons-sharp">dark_mode</span>
                </div>
                <div class="profile">
                    <div class="info">
                        <p>Hey, <b>Athar</b></p>
                        <small class="text-muted">Admin</small>
                    </div>
                    <div class="profile-photo">
                        <img src={profile1} alt="hero" />
                    </div>
                </div>
            </div>
            {/* <!----------- END OF TOP -----------> */}
            <div class="recent-updates">
                <h2>Recent Updates</h2>
                <div class="updates">
                    <div class="update">
                        <div class="profile-photo">
                            <img src={profile2} alt="hero" />
                        </div>
                        <div class="message">
                            <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src={profile3} alt="hero" />
                        </div>
                        <div class="message">
                            <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                    <div class="update">
                        <div class="profile-photo">
                            <img src={profile4} alt="hero" />
                        </div>
                        <div class="message">
                            <p><b>Mike <b>received his order of Night lion tech GPS drone</b></b></p>
                            <small class="text-muted">2 Minutes Ago</small>
                        </div>
                    </div>
                </div>
                {/* <!----------- END OF RECENT UPDATES -------> */}
                <div class="sales-analytics">
                    <h2>Sales Analytics</h2>

                    <div class="item online">
                        <div class="icon">
                            <span class="material-icons-sharp">shopping_cart</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>ONLINE ORDERS</h3>
                                <small class="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 class="success">55%</h5>
                                <h3>2432</h3>
                            </div>
                        </div>
                    </div>
                    <div class="item offline">
                        <div class="icon">
                            <span class="material-icons-sharp">local_mall</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>OFFLINE ORDERS</h3>
                                <small class="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 class="danger">-15%</h5>
                                <h3>781</h3>
                            </div>
                        </div>
                    </div>
                    <div class="item customers">
                        <div class="icon">
                            <span class="material-icons-sharp">person</span>
                        </div>
                        <div class="right">
                            <div class="info">
                                <h3>NEW CUSTOMERS</h3>
                                <small class="text-muted">Last 24 Hours</small>
                            </div>
                            <div>
                                <h5 class="success">+25%</h5>
                                <h3>1822</h3>
                            </div>
                        </div>
                    </div>


                    <div class="item" id="add_product">
                        <div>
                            <span class="material-icons-sharp">add</span>
                            <h3>Add Product</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard
