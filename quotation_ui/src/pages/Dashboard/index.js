import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import ReactApexChart from "react-apexcharts"

import Breadcrumbs from '../../components/Common/Breadcrumb';
import SalesReport from './SalesReport';
import EmailSent from './Qutotation';
import MiniWidget from './MiniWidget';
import EarningChart from './EarningChart';
import YearlySale from './YearlySale';
import ActivityComp from "./ActivityComp"
import PopularProduct from "./PopularProduct"
import SocialSource from "./SocialSource"

const series = [70]

const options = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5, size: '60%', background: 'rgba(59, 93, 231, .25)',
            }
            ,
            dataLabels: {
                name: {
                    show: false,
                }
                ,
                value: {
                    show: true, fontSize: '12px', offsetY: 5,
                }
                ,
                style: {
                    colors: ['#fff']
                }
            }
        }
        ,
    }
    ,
    colors: ['#3b5de7'],
}

const series1 = [81]

const options1 = {
    plotOptions: {
        radialBar: {
            offsetY: -12,
            hollow: {
                margin: 5, size: '60%', background: 'rgba(69, 203, 133, .25)',
            }
            ,
            dataLabels: {
                name: {
                    show: false,
                }
                ,
                value: {
                    show: true, fontSize: '12px', offsetY: 5,
                }
                ,
                style: {
                    colors: ['#fff']
                }
            }
        }
        ,
    }
    ,
    colors: ['#45CB85'],
}

const Dashboard2 = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <Breadcrumbs title="Dashboard" breadcrumbItem="Dashboard 2" />
                <Row>
                
                    <EmailSent />
                </Row>
            
            </div>
        </React.Fragment>
    )
}

export default Dashboard2;