import React, { useEffect, useState } from "react"
import { Card, CardBody, Col, Row } from "reactstrap"
import ReactApexChart from "react-apexcharts"
import { Link } from "react-router-dom"
import { GET_REPORTS } from "../../Constonts/api"
import axios from "axios"
import { connect } from "react-redux"
import {setAlert} from "../../store/genric/genericAction"
import PropTypes from 'prop-types'
import Select from "react-select";



const Breadcrumb = props => {
    const {login}=props
  const [details,setDetails]=useState({options:{},series :[{
    name: 'Number of Quotations', type: 'column', data: []
}
]})
const [reportingEmp,setReportingEmp]=useState([])
const [selectedcustGroup1, setselectedcustGroup1] = useState(null);
    const fetchData=(emp)=>{
        axios.get(GET_REPORTS+login?.company_id+"/"+emp.employee_id).then((val)=>{
          
            // props.setAlert({
            //   message:val.data.msg,
            //   type:"SUCCESS"
            // })
            var cat=[]
            var colum=[]
            for(let i=0;i<val.data.values.length;i++){
                cat.push(val.data.values[i].quot_status)
                colum.push(val.data.values[i].count)
            }
            const data = {
     options: {
                    chart: {
                        stacked: !1,
                        toolbar: {
                            show: !1
                        }
                        ,
                    }
                    ,
                    stroke: {
                        width: [0, 2, 2], curve: 'smooth', dashArray: [0, 0, 4]
                    }
                    ,
                    plotOptions: {
                        bar: {
                            columnWidth: '15%', endingShape: 'rounded'
                        }
                    }
                    ,
                    fill: {
                        opacity: [0.85,
                        0.25,
                        1],
                        gradient: {
                            inverseColors: !1, shade: 'light', type: "vertical", opacityFrom: 0.85, opacityTo: 0.55, stops: [0, 100, 100, 100]
                        }
                    }
                    ,
                    xaxis: {
                        categories: cat,
                    }
                    ,
                    colors: ['#3b5de7',
                    '#eeb902',
                    '#5fd195'],
                    markers: {
                        size: 0
                    }
                    ,
                  },
                  series :[{
                    name: 'Number of Quotations', type: 'column', data: colum
                }
                ]}
            setDetails(data)
          
        }).catch(err=>{
          if(err?.response){
            console.log(err?.response?.data?.msg)
            props.setAlert({
              message:String(err?.response?.data?.msg),
              type:"ERROR"
            })
          }
          else{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
          }
          
        })
      }
      const handleSelectGroup=(selectedGroup)=> {
        fetchData(selectedGroup)
        setselectedcustGroup1(selectedGroup);
      }
    useEffect(()=>{
        let emp=login?.reported_employees.map((employe,index)=>{
            return{
                ...employe,
                label:employe.employee_name,
                value:employe.employee_id
            }
        })
        setReportingEmp(emp)
        if(emp?.length>0){
            fetchData(emp?.[0])
        setselectedcustGroup1(emp?.[0]);
        }
        
      },[])
    return (
        <React.Fragment>
            <Col lg={7}>
                <Card>
                    <CardBody>
                    <h4 className="card-title mb-4">Quotation Details</h4>

                        <div >
                           <Row>
                               <Col size={6}>
                               <Select 
                             value={selectedcustGroup1}
                             onChange={
                               handleSelectGroup
                             }
                             
                             options={reportingEmp}
                             classNamePrefix="select2-selection"
                            placeholder="Select Employee"
                            />
                               </Col>
                           </Row>
                              
                        </div> 
                        <ReactApexChart
                            options={details?.options}
                            series={details?.series}
                            type="line"
                            // height="275"
                            className="apex-charts"
                        />

                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    const { cacheDetails } = state?.genricReducer
    const { login } = state?.Login
   
    return {  cacheDetails,login}
  }
export default connect(mapStateToProps, { setAlert })(Breadcrumb);

Breadcrumb.propTypes = {
    setAlert: PropTypes.func,
  }