import React from 'react';
import MainHeader from './main-header.jsx';

export default class Base extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <MainHeader/>

                {/* Left side column. contains the logo and sidebar */}
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                </button>
              </span>
                            </div>
                        </form>
                        {/* /.search form */}
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i> <span>Dashboard</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                                    <li className="active"><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-files-o"></i>
                                    <span>Layout Options</span>
                                    <span className="pull-right-container">
              <span className="label label-primary pull-right">4</span>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/layout/top-nav.html"><i className="fa fa-circle-o"></i> Top Navigation</a></li>
                                    <li><a href="pages/layout/boxed.html"><i className="fa fa-circle-o"></i> Boxed</a></li>
                                    <li><a href="pages/layout/fixed.html"><i className="fa fa-circle-o"></i> Fixed</a></li>
                                    <li><a href="pages/layout/collapsed-sidebar.html"><i className="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/widgets.html">
                                    <i className="fa fa-th"></i> <span>Widgets</span>
                                    <span className="pull-right-container">
              <small className="label pull-right bg-green">new</small>
            </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-pie-chart"></i>
                                    <span>Charts</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                                    <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                                    <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                                    <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-laptop"></i>
                                    <span>UI Elements</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                                    <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                                    <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                                    <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                                    <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                                    <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-edit"></i> <span>Forms</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                                    <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                                    <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-table"></i> <span>Tables</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                                    <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="pages/calendar.html">
                                    <i className="fa fa-calendar"></i> <span>Calendar</span>
                                    <span className="pull-right-container">
              <small className="label pull-right bg-red">3</small>
              <small className="label pull-right bg-blue">17</small>
            </span>
                                </a>
                            </li>
                            <li>
                                <a href="pages/mailbox/mailbox.html">
                                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                    <span className="pull-right-container">
              <small className="label pull-right bg-yellow">12</small>
              <small className="label pull-right bg-green">16</small>
              <small className="label pull-right bg-red">5</small>
            </span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-folder"></i> <span>Examples</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="pages/examples/invoice.html"><i className="fa fa-circle-o"></i> Invoice</a></li>
                                    <li><a href="pages/examples/profile.html"><i className="fa fa-circle-o"></i> Profile</a></li>
                                    <li><a href="pages/examples/login.html"><i className="fa fa-circle-o"></i> Login</a></li>
                                    <li><a href="pages/examples/register.html"><i className="fa fa-circle-o"></i> Register</a></li>
                                    <li><a href="pages/examples/lockscreen.html"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                                    <li><a href="pages/examples/404.html"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                                    <li><a href="pages/examples/500.html"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                                    <li><a href="pages/examples/blank.html"><i className="fa fa-circle-o"></i> Blank Page</a></li>
                                    <li><a href="pages/examples/pace.html"><i className="fa fa-circle-o"></i> Pace Page</a></li>
                                </ul>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-share"></i> <span>Multilevel</span>
                                    <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"></i>
            </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                    <li>
                                        <a href="#"><i className="fa fa-circle-o"></i> Level One
                                            <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
                </span>
                                        </a>
                                        <ul className="treeview-menu">
                                            <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                                            <li>
                                                <a href="#"><i className="fa fa-circle-o"></i> Level Two
                                                    <span className="pull-right-container">
                      <i className="fa fa-angle-left pull-right"></i>
                    </span>
                                                </a>
                                                <ul className="treeview-menu">
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                                </ul>
                            </li>
                            <li><a href="documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                            <li className="header">LABELS</li>
                            <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                            <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                        </ul>
                    </section>
                    {/* /.sidebar */}
                </aside>

                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Dashboard
                            <small>Version 2.0</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>

                    {/* Main content */}
                    <section className="content">
                        {/* Info boxes */}
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">CPU Traffic</span>
                                        <span className="info-box-number">90<small>%</small></span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Likes</span>
                                        <span className="info-box-number">41,410</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}

                            {/* fix for small devices only */}
                            <div className="clearfix visible-sm-block"></div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-green"><i className="ion ion-ios-cart-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Sales</span>
                                        <span className="info-box-number">760</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="info-box">
                                    <span className="info-box-icon bg-yellow"><i className="ion ion-ios-people-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">New Members</span>
                                        <span className="info-box-number">2,000</span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}

                        <div className="row">
                            <div className="col-md-12">
                                <div className="box">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Monthly Recap Report</h3>

                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                            </button>
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-box-tool dropdown-toggle" data-toggle="dropdown">
                                                    <i className="fa fa-wrench"></i></button>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li><a href="#">Action</a></li>
                                                    <li><a href="#">Another action</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p className="text-center">
                                                    <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                                                </p>

                                                <div className="chart">

                                                </div>
                                                {/* /.chart-responsive */}
                                            </div>
                                            {/* /.col */}
                                            <div className="col-md-4">
                                                <p className="text-center">
                                                    <strong>Goal Completion</strong>
                                                </p>

                                                <div className="progress-group">
                                                    <span className="progress-text">Add Products to Cart</span>
                                                    <span className="progress-number"><b>160</b>/200</span>

                                                    <div className="progress sm">
                                                        <div className="progress-bar progress-bar-aqua"></div>
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    <span className="progress-text">Complete Purchase</span>
                                                    <span className="progress-number"><b>310</b>/400</span>

                                                    <div className="progress sm">
                                                        <div className="progress-bar progress-bar-red"></div>
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    <span className="progress-text">Visit Premium Page</span>
                                                    <span className="progress-number"><b>480</b>/800</span>

                                                    <div className="progress sm">
                                                        <div className="progress-bar progress-bar-green"></div>
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                                <div className="progress-group">
                                                    <span className="progress-text">Send Inquiries</span>
                                                    <span className="progress-number"><b>250</b>/500</span>

                                                    <div className="progress sm">
                                                        <div className="progress-bar progress-bar-yellow"></div>
                                                    </div>
                                                </div>
                                                {/* /.progress-group */}
                                            </div>
                                            {/* /.col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* ./box-body */}
                                    <div className="box-footer">
                                        <div className="row">
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 17%</span>
                                                    <h5 className="description-header">$35,210.43</h5>
                                                    <span className="description-text">TOTAL REVENUE</span>
                                                </div>
                                                {/* /.description-block */}
                                            </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-yellow"><i className="fa fa-caret-left"></i> 0%</span>
                                                    <h5 className="description-header">$10,390.90</h5>
                                                    <span className="description-text">TOTAL COST</span>
                                                </div>
                                                {/* /.description-block */}
                                            </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-green"><i className="fa fa-caret-up"></i> 20%</span>
                                                    <h5 className="description-header">$24,813.53</h5>
                                                    <span className="description-text">TOTAL PROFIT</span>
                                                </div>
                                                {/* /.description-block */}
                                            </div>
                                            {/* /.col */}
                                            <div className="col-sm-3 col-xs-6">
                                                <div className="description-block">
                                                    <span className="description-percentage text-red"><i className="fa fa-caret-down"></i> 18%</span>
                                                    <h5 className="description-header">1200</h5>
                                                    <span className="description-text">GOAL COMPLETIONS</span>
                                                </div>
                                                {/* /.description-block */}
                                            </div>
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.box-footer */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}
                            <div className="col-md-8">
                                {/* MAP & BOX PANE */}
                                <div className="box box-success">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Visitors Report</h3>

                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body no-padding">
                                        <div className="row">
                                            <div className="col-md-9 col-sm-8">
                                                <div className="pad">
                                                    {/* Map will be created here */}
                                                    <div id="world-map-markers"></div>
                                                </div>
                                            </div>
                                            {/* /.col */}
                                            <div className="col-md-3 col-sm-4">
                                                <div className="pad box-pane-right bg-green">
                                                    <div className="description-block margin-bottom">
                                                        <div className="sparkbar pad" data-color="#fff">90,70,90,70,75,80,70</div>
                                                        <h5 className="description-header">8390</h5>
                                                        <span className="description-text">Visits</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                    <div className="description-block margin-bottom">
                                                        <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                                        <h5 className="description-header">30%</h5>
                                                        <span className="description-text">Referrals</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                    <div className="description-block">
                                                        <div className="sparkbar pad" data-color="#fff">90,50,90,70,61,83,63</div>
                                                        <h5 className="description-header">70%</h5>
                                                        <span className="description-text">Organic</span>
                                                    </div>
                                                    {/* /.description-block */}
                                                </div>
                                            </div>
                                            {/* /.col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                <div className="row">
                                    <div className="col-md-6">
                                        {/* DIRECT CHAT */}
                                        <div className="box box-warning direct-chat direct-chat-warning">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Direct Chat</h3>

                                                <div className="box-tools pull-right">
                                                    <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts" data-widget="chat-pane-toggle">
                                                        <i className="fa fa-comments"></i></button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* /.box-header */}
                                            <div className="box-body">
                                                {/* Conversations are loaded here */}
                                                <div className="direct-chat-messages">
                                                    {/* Message. Default to the left */}
                                                    <div className="direct-chat-msg">
                                                        <div className="direct-chat-info clearfix">
                                                            <span className="direct-chat-name pull-left">Alexander Pierce</span>
                                                            <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                                                        </div>
                                                        {/* /.direct-chat-info */}
                                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />{/* /.direct-chat-img */}
                                                            <div className="direct-chat-text">
                                                                Is this template really for free? That's unbelievable!
                                                            </div>
                                                            {/* /.direct-chat-text */}
                                                    </div>
                                                    {/* /.direct-chat-msg */}

                                                    {/* Message to the right */}
                                                    <div className="direct-chat-msg right">
                                                        <div className="direct-chat-info clearfix">
                                                            <span className="direct-chat-name pull-right">Sarah Bullock</span>
                                                            <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                                                        </div>
                                                        {/* /.direct-chat-info */}
                                                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />{/* /.direct-chat-img */}
                                                            <div className="direct-chat-text">
                                                                You better believe it!
                                                            </div>
                                                            {/* /.direct-chat-text */}
                                                    </div>
                                                    {/* /.direct-chat-msg */}

                                                    {/* Message. Default to the left */}
                                                    <div className="direct-chat-msg">
                                                        <div className="direct-chat-info clearfix">
                                                            <span className="direct-chat-name pull-left">Alexander Pierce</span>
                                                            <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                                                        </div>
                                                        {/* /.direct-chat-info */}
                                                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image" />{/* /.direct-chat-img */}
                                                            <div className="direct-chat-text">
                                                                Working with AdminLTE on a great new app! Wanna join?
                                                            </div>
                                                            {/* /.direct-chat-text */}
                                                    </div>
                                                    {/* /.direct-chat-msg */}

                                                    {/* Message to the right */}
                                                    <div className="direct-chat-msg right">
                                                        <div className="direct-chat-info clearfix">
                                                            <span className="direct-chat-name pull-right">Sarah Bullock</span>
                                                            <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                                                        </div>
                                                        {/* /.direct-chat-info */}
                                                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image" />{/* /.direct-chat-img */}
                                                            <div className="direct-chat-text">
                                                                I would love to.
                                                            </div>
                                                            {/* /.direct-chat-text */}
                                                    </div>
                                                    {/* /.direct-chat-msg */}

                                                </div>
                                                {/*/.direct-chat-messages*/}

                                                {/* Contacts are loaded here */}
                                                <div className="direct-chat-contacts">
                                                    <ul className="contacts-list">
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Count Dracula
                                  <small className="contacts-list-date pull-right">2/28/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">How have you been? I was...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Sarah Doe
                                  <small className="contacts-list-date pull-right">2/23/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">I will be waiting for...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nadia Jolie
                                  <small className="contacts-list-date pull-right">2/20/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">I'll call you back at...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Nora S. Vans
                                  <small className="contacts-list-date pull-right">2/10/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">Where is your new...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  John K.
                                  <small className="contacts-list-date pull-right">1/27/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">Can I take a look at...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                        <li>
                                                            <a href="#">
                                                                <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Image" />

                                                                    <div className="contacts-list-info">
                                <span className="contacts-list-name">
                                  Kenneth M.
                                  <small className="contacts-list-date pull-right">1/4/2015</small>
                                </span>
                                                                        <span className="contacts-list-msg">Never mind I found...</span>
                                                                    </div>
                                                                    {/* /.contacts-list-info */}
                                                            </a>
                                                        </li>
                                                        {/* End Contact Item */}
                                                    </ul>
                                                    {/* /.contatcts-list */}
                                                </div>
                                                {/* /.direct-chat-pane */}
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer">
                                                <form action="#" method="post">
                                                    <div className="input-group">
                                                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                          <span className="input-group-btn">
                            <button type="button" className="btn btn-warning btn-flat">Send</button>
                          </span>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* /.box-footer*/}
                                        </div>
                                        {/*/.direct-chat */}
                                    </div>
                                    {/* /.col */}

                                    <div className="col-md-6">
                                        {/* USERS LIST */}
                                        <div className="box box-danger">
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Latest Members</h3>

                                                <div className="box-tools pull-right">
                                                    <span className="label label-danger">8 New Members</span>
                                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* /.box-header */}
                                            <div className="box-body no-padding">
                                                <ul className="users-list clearfix">
                                                    <li>
                                                        <img src="dist/img/user1-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Alexander Pierce</a>
                                                            <span className="users-list-date">Today</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user8-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Norman</a>
                                                            <span className="users-list-date">Yesterday</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user7-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Jane</a>
                                                            <span className="users-list-date">12 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user6-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">John</a>
                                                            <span className="users-list-date">12 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user2-160x160.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Alexander</a>
                                                            <span className="users-list-date">13 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user5-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Sarah</a>
                                                            <span className="users-list-date">14 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user4-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Nora</a>
                                                            <span className="users-list-date">15 Jan</span>
                                                    </li>
                                                    <li>
                                                        <img src="dist/img/user3-128x128.jpg" alt="User Image" />
                                                            <a className="users-list-name" href="#">Nadia</a>
                                                            <span className="users-list-date">15 Jan</span>
                                                    </li>
                                                </ul>
                                                {/* /.users-list */}
                                            </div>
                                            {/* /.box-body */}
                                            <div className="box-footer text-center">
                                                <a href="javascript:void(0)" className="uppercase">View All Users</a>
                                            </div>
                                            {/* /.box-footer */}
                                        </div>
                                        {/*/.box */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}

                                {/* TABLE: LATEST ORDERS */}
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Latest Orders</h3>

                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="table-responsive">
                                            <table className="table no-margin">
                                                <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Item</th>
                                                    <th>Status</th>
                                                    <th>Popularity</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                    <td>Call of Duty IV</td>
                                                    <td><span className="label label-success">Shipped</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                    <td>Samsung Smart TV</td>
                                                    <td><span className="label label-warning">Pending</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                    <td>iPhone 6 Plus</td>
                                                    <td><span className="label label-danger">Delivered</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                    <td>Samsung Smart TV</td>
                                                    <td><span className="label label-info">Processing</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#00c0ef" data-height="20">90,80,-90,70,-61,83,63</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR1848</a></td>
                                                    <td>Samsung Smart TV</td>
                                                    <td><span className="label label-warning">Pending</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#f39c12" data-height="20">90,80,-90,70,61,-83,68</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR7429</a></td>
                                                    <td>iPhone 6 Plus</td>
                                                    <td><span className="label label-danger">Delivered</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#f56954" data-height="20">90,-80,90,70,-61,83,63</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                                    <td>Call of Duty IV</td>
                                                    <td><span className="label label-success">Shipped</span></td>
                                                    <td>
                                                        <div className="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* /.table-responsive */}
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer clearfix">
                                        <a href="javascript:void(0)" className="btn btn-sm btn-info btn-flat pull-left">Place New Order</a>
                                        <a href="javascript:void(0)" className="btn btn-sm btn-default btn-flat pull-right">View All Orders</a>
                                    </div>
                                    {/* /.box-footer */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}

                            <div className="col-md-4">
                                {/* Info Boxes Style 2 */}
                                <div className="info-box bg-yellow">
                                    <span className="info-box-icon"><i className="ion ion-ios-pricetag-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Inventory</span>
                                        <span className="info-box-number">5,200</span>

                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <span className="progress-description">
                    50% Increase in 30 Days
                  </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box bg-green">
                                    <span className="info-box-icon"><i className="ion ion-ios-heart-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Mentions</span>
                                        <span className="info-box-number">92,050</span>

                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <span className="progress-description">
                    20% Increase in 30 Days
                  </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box bg-red">
                                    <span className="info-box-icon"><i className="ion ion-ios-cloud-download-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Downloads</span>
                                        <span className="info-box-number">114,381</span>

                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <span className="progress-description">
                    70% Increase in 30 Days
                  </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                                <div className="info-box bg-aqua">
                                    <span className="info-box-icon"><i className="ion-ios-chatbubble-outline"></i></span>

                                    <div className="info-box-content">
                                        <span className="info-box-text">Direct Messages</span>
                                        <span className="info-box-number">163,921</span>

                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <span className="progress-description">
                    40% Increase in 30 Days
                  </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}

                                <div className="box box-default">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Browser Usage</h3>

                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="chart-responsive">
                                                    <canvas id="pieChart" height="150"></canvas>
                                                </div>
                                                {/* ./chart-responsive */}
                                            </div>
                                            {/* /.col */}
                                            <div className="col-md-4">
                                                <ul className="chart-legend clearfix">
                                                    <li><i className="fa fa-circle-o text-red"></i> Chrome</li>
                                                    <li><i className="fa fa-circle-o text-green"></i> IE</li>
                                                    <li><i className="fa fa-circle-o text-yellow"></i> FireFox</li>
                                                    <li><i className="fa fa-circle-o text-aqua"></i> Safari</li>
                                                    <li><i className="fa fa-circle-o text-light-blue"></i> Opera</li>
                                                    <li><i className="fa fa-circle-o text-gray"></i> Navigator</li>
                                                </ul>
                                            </div>
                                            {/* /.col */}
                                        </div>
                                        {/* /.row */}
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer no-padding">
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><a href="#">United States of America
                                                <span className="pull-right text-red"><i className="fa fa-angle-down"></i> 12%</span></a></li>
                                            <li><a href="#">India <span className="pull-right text-green"><i className="fa fa-angle-up"></i> 4%</span></a>
                                            </li>
                                            <li><a href="#">China
                                                <span className="pull-right text-yellow"><i className="fa fa-angle-left"></i> 0%</span></a></li>
                                        </ul>
                                    </div>
                                    {/* /.footer */}
                                </div>
                                {/* /.box */}

                                {/* PRODUCT LIST */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Recently Added Products</h3>

                                        <div className="box-tools pull-right">
                                            <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i></button>
                                        </div>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <ul className="products-list product-list-in-box">
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Samsung TV
                                                        <span className="label label-warning pull-right">$1800</span></a>
                                                    <span className="product-description">
                          Samsung 32" 1080p 60Hz LED Smart HDTV.
                        </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Bicycle
                                                        <span className="label label-info pull-right">$700</span></a>
                                                    <span className="product-description">
                          26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                        </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">Xbox One <span className="label label-danger pull-right">$350</span></a>
                                                    <span className="product-description">
                          Xbox One Console Bundle with Halo Master Chief Collection.
                        </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                            <li className="item">
                                                <div className="product-img">
                                                    <img src="dist/img/default-50x50.gif" alt="Product Image" />
                                                </div>
                                                <div className="product-info">
                                                    <a href="javascript:void(0)" className="product-title">PlayStation 4
                                                        <span className="label label-success pull-right">$399</span></a>
                                                    <span className="product-description">
                          PlayStation 4 500GB Console (PS4)
                        </span>
                                                </div>
                                            </li>
                                            {/* /.item */}
                                        </ul>
                                    </div>
                                    {/* /.box-body */}
                                    <div className="box-footer text-center">
                                        <a href="javascript:void(0)" className="uppercase">View All Products</a>
                                    </div>
                                    {/* /.box-footer */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                {/* /.content-wrapper */}

                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 2.3.7
                    </div>
                    <strong>Copyright &copy; 2014-2016 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights
                    reserved.
                </footer>

                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Create the tabs */}
                    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
                        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        {/* Home tab content */}
                        <div className="tab-pane" id="control-sidebar-home-tab">
                            <h3 className="control-sidebar-heading">Recent Activity</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                                            <p>Will be 23 on April 24th</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-user bg-yellow"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Frodo Updated His Profile</h4>

                                            <p>New phone +1(800)555-1234</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-envelope-o bg-light-blue"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Nora Joined Mailing List</h4>

                                            <p>nora@example.com</p>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="menu-icon fa fa-file-code-o bg-green"></i>

                                        <div className="menu-info">
                                            <h4 className="control-sidebar-subheading">Cron Job 254 Executed</h4>

                                            <p>Execution time 5 seconds</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            {/* /.control-sidebar-menu */}

                            <h3 className="control-sidebar-heading">Tasks Progress</h3>
                            <ul className="control-sidebar-menu">
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Custom Template Design
                                            <span className="label label-danger pull-right">70%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-danger"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Update Resume
                                            <span className="label label-success pull-right">95%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-success"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Laravel Integration
                                            <span className="label label-warning pull-right">50%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-warning"></div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <h4 className="control-sidebar-subheading">
                                            Back End Framework
                                            <span className="label label-primary pull-right">68%</span>
                                        </h4>

                                        <div className="progress progress-xxs">
                                            <div className="progress-bar progress-bar-primary"></div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            {/* /.control-sidebar-menu */}

                        </div>
                        {/* /.tab-pane */}

                        {/* Settings tab content */}
                        <div className="tab-pane" id="control-sidebar-settings-tab">
                            <form method="post">
                                <h3 className="control-sidebar-heading">General Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Report panel usage
                                        <input type="checkbox" className="pull-right" defaultChecked />
                                    </label>

                                    <p>
                                        Some information about this general settings option
                                    </p>
                                </div>
                                {/* /.form-group */}

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Allow mail redirect
                                        <input type="checkbox" className="pull-right" defaultChecked />
                                    </label>

                                    <p>
                                        Other sets of options are available
                                    </p>
                                </div>
                                {/* /.form-group */}

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Expose author name in posts
                                        <input type="checkbox" className="pull-right" defaultChecked />
                                    </label>

                                    <p>
                                        Allow the user to show his name in blog posts
                                    </p>
                                </div>
                                {/* /.form-group */}

                                <h3 className="control-sidebar-heading">Chat Settings</h3>

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Show me as online
                                        <input type="checkbox" className="pull-right" defaultChecked />
                                    </label>
                                </div>
                                {/* /.form-group */}

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Turn off notifications
                                        <input type="checkbox" className="pull-right" />
                                    </label>
                                </div>
                                {/* /.form-group */}

                                <div className="form-group">
                                    <label className="control-sidebar-subheading">
                                        Delete chat history
                                        <a href="javascript:void(0)" className="text-red pull-right"><i className="fa fa-trash-o"></i></a>
                                    </label>
                                </div>
                                {/* /.form-group */}
                            </form>
                        </div>
                        {/* /.tab-pane */}
                    </div>
                </aside>
                {/* /.control-sidebar */}
                {/* Add the sidebar's background. This div must be placed
                 immediately after the control sidebar */}
                <div className="control-sidebar-bg"></div>

            </div>
        )
    }
};
