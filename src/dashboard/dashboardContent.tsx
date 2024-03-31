import  { useState, useEffect,useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Banner1 from '../assets/Banner1.png'
import '../styles/dashboardContent.css'
import Chart from 'chart.js/auto'; 
import { NavLink } from 'react-router-dom';

const dashboardContent = () => {
 

  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to the current date

  useEffect(() => {
    // Update selectedDate to the current date when the component mounts
    setSelectedDate(new Date());
  }, []);

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };


//   Starting the lines starts here
const chartRef = useRef<HTMLCanvasElement | null>(null);
const chartRef1 = useRef<HTMLCanvasElement | null>(null);
const chartRef2 = useRef<HTMLCanvasElement | null>(null);
const chartRef3 = useRef<HTMLCanvasElement | null>(null);
const chartRef4 = useRef<HTMLCanvasElement | null>(null);
  const dataPoints = [
    { x: new Date(2017, 0), y: 25060 },
    { x: new Date(2017, 1), y: 27980 },
    { x: new Date(2017, 2), y: 42800 },
    { x: new Date(2017, 3), y: 32400 },
    { x: new Date(2017, 4), y: 35260 },
    { x: new Date(2017, 5), y: 33900 },
    { x: new Date(2017, 6), y: 40000 },
    { x: new Date(2017, 7), y: 52500 },
    { x: new Date(2017, 8), y: 32300 },
    { x: new Date(2017, 9), y: 42000 },
    { x: new Date(2017, 10), y: 37160 },
    { x: new Date(2017, 11), y: 38400 },
  ];
  const dataPoints1 = [
    { x: new Date(2017, 0), y: 15000 },
    { x: new Date(2017, 1), y: 20000 },
    { x: new Date(2017, 2), y: 28000 },
    { x: new Date(2017, 3), y: 32000 },
    { x: new Date(2017, 4), y: 41000 },
    { x: new Date(2017, 5), y: 35000 },
    { x: new Date(2017, 6), y: 44000 },
    { x: new Date(2017, 7), y: 52000 },
    { x: new Date(2017, 8), y: 39000 },
    { x: new Date(2017, 9), y: 48000 },
    { x: new Date(2017, 10), y: 39000 },
    { x: new Date(2017, 11), y: 43000 },
  ];
  
  const generateLabels = () => {
    return dataPoints.map((_) => `$`);
  };

  const generateData = () => {
    return dataPoints.map((dataPoint) => dataPoint.y);
  };


  const generateData1 = () => {
    return dataPoints1.map((dataPoint) => dataPoint.y);
  };
  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: '',
        data: generateData(),
        borderColor: '#FF5FC0',
        backgroundColor: '#203047',
        fill: 'start',
      },
    ],
  };
  const data1 = {
    labels: generateLabels(),
    datasets: [
      {
        label: '',
        data: generateData(),
        borderColor: '#FF5FC0',
        backgroundColor: '#FF5FC0',
        fill: 'start',
      },
      {
        label: '',
        data: generateData1(),
        borderColor: '#FF5FC0',
        backgroundColor: '#012B6D',
        fill: 'start',
      },
    ],
  };
  const config = {
    type: 'line' as const,
    data: data,
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
    },
  };
  const config1 = {
    type: 'line' as const,
    data: data,
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
    },
  };
  const config2 = {
    type: 'line' as const,
    data: data,
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
    },
  };
  const config3 = {
    type: 'line' as const,
    data: data,
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
    },
  };
// For Bar Chart
const config4 = {
    type: 'bar' as const,
    data: data1,
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        filler: {
          propagate: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
      },
      elements: {
        line: {
          tension: 0,
        },
      },
    },
  };
 // For Line Chart
useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if ((chartRef.current as any).chart) { // Type assertion
          (chartRef.current as any).chart.destroy(); // Destroy the existing chart
        }
        const chart = new Chart(ctx, config);
        (chartRef.current as any).chart = chart; // Type assertion
  
        return () => {
          if (chartRef.current && (chartRef.current as any).chart) { // Type assertion
            (chartRef.current as any).chart.destroy();
          }
        };
      }
    }
  }, []);
  
  // For Bar Charts
  useEffect(() => {
    if (chartRef1.current) {
      const ctx = chartRef1.current.getContext('2d');
      if (ctx) {
        if ((chartRef1.current as any).chart) { // Type assertion
          (chartRef1.current as any).chart.destroy(); // Destroy the existing chart
        }
        const chart = new Chart(ctx, config1);
        (chartRef1.current as any).chart = chart; // Type assertion
  
        return () => {
          if (chartRef1.current && (chartRef1.current as any).chart) { // Type assertion
            (chartRef1.current as any).chart.destroy();
          }
        };
      }
    }
  }, []);
  useEffect(() => {
    if (chartRef2.current) {
      const ctx = chartRef2.current.getContext('2d');
      if (ctx) {
        if ((chartRef2.current as any).chart) { // Type assertion
          (chartRef2.current as any).chart.destroy(); // Destroy the existing chart
        }
        const chart = new Chart(ctx, config2);
        (chartRef2.current as any).chart = chart; // Type assertion
  
        return () => {
          if (chartRef2.current && (chartRef2.current as any).chart) { // Type assertion
            (chartRef2.current as any).chart.destroy();
          }
        };
      }
    }
  }, []);
  useEffect(() => {
    if (chartRef3.current) {
      const ctx = chartRef3.current.getContext('2d');
      if (ctx) {
        if ((chartRef3.current as any).chart) { // Type assertion
          (chartRef3.current as any).chart.destroy(); // Destroy the existing chart
        }
        const chart = new Chart(ctx, config3);
        (chartRef3.current as any).chart = chart; // Type assertion
  
        return () => {
          if (chartRef3.current && (chartRef3.current as any).chart) { // Type assertion
            (chartRef3.current as any).chart.destroy();
          }
        };
      }
    }
  }, []);
  useEffect(() => {
    if (chartRef4.current) {
      const ctx = chartRef4.current.getContext('2d');
      if (ctx) {
        if ((chartRef4.current as any).chart) { // Type assertion
          (chartRef4.current as any).chart.destroy(); // Destroy the existing chart
        }
        const chart = new Chart(ctx, config4);
        (chartRef4.current as any).chart = chart; // Type assertion
  
        return () => {
          if (chartRef4.current && (chartRef4.current as any).chart) { // Type assertion
            (chartRef4.current as any).chart.destroy();
          }
        };
      }
    }
  }, []);
  return (
   <div className='container'>
     <div className='container'>
         <div className="image-container">
        <img src={Banner1}/>
        <div className="text-container">
            <h1>Good afternoon, Social reach Pro.</h1>
            <p>Here is what’s happening with your projects today:</p>
        </div>
    </div>
    </div>
   <div className='container'>

   <div className='buttons-container'>
 
   <DatePicker
        showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date and Time"
      />
   <NavLink to='/adduser' type='button' className="btn button1">
       <span> <i className="bi bi-plus-square"></i>+ Add User</span>
      </NavLink>

      <NavLink to='/addmanager' type='button' className="btn button2" style={{marginBottom:'20px'}}>
      <span>  <i className="bi bi-plus-square"></i>+ Add Manager</span>
      </NavLink>
   </div>
   </div>
   <div className='container card_container'>
  <div className='row'>
    <div className='col-md-4 mb-3'>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Social Reach Pro</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
    <div className='d-flex'>
    <p className="h4">$24,780</p>
    <div className='p-container'>
      <p>+49%</p>
    </div>
    </div>
    {/* <Line data={chartData} options={chartOptions}/> */}
   
  </div>
  <canvas ref={chartRef} width="400" height="200" ></canvas>
</div>
    </div>
    <div className='col-md-4 mb-3'>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Social Reach Pro</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
    <div className='d-flex'>
    <p className="h4">$24,780</p>
    <div className='p-container'>
      <p>+49%</p>
    </div>
    </div>
    {/* <Line data={chartData} options={chartOptions}/> */}
   
  </div>
  <canvas ref={chartRef1} width="400" height="200"></canvas>
</div>
    </div>
    <div className='col-md-4 mb-3'>
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Social Reach Pro</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
    <div className='d-flex'>
    <p className="h4">$24,780</p>
    <div className='p-container'>
      <p>+49%</p>
    </div>
    </div>
    {/* <Line data={chartData} options={chartOptions}/> */}
  
  </div>
  <canvas ref={chartRef2} width="100%" height="50"></canvas>
</div>
    </div>
  </div>
</div>
<div className='container card_container'>
  <div className='row'>
    <div className='col-md-6'>
    <div className="card col_md_6_card">
  <div className="card-body" >
    <h5 className="card-title"style={{color:'#FFF'}}>Social Reach Pro</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
    <div className='d-flex'>
    <p className="h4"style={{color:'#FFF'}}>$24,780</p>
    <div className='p-container'>
      <p>+49%</p>
    </div>
    </div>
    {/* <Line data={chartData} options={chartOptions}/> */}
    <canvas ref={chartRef4} width="100%" height="120px"></canvas>
  </div>
</div>
    </div>
    <div className='col-md-6'>
    <div className="card col_md_6_card">
  <div className="card-body" style={{color:'#FFF'}}>
    <h5 className="card-title" style={{color:'#FFF'}}>Social Reach Pro</h5>
    <h6 className="card-subtitle mb-2 text-muted">Sales</h6>
    <div className='d-flex'>
    <p className="h4"style={{color:'#FFF'}}>$24,780</p>
    <div className='p-container'>
      <p>+49%</p>
    </div>
    </div>
    {/* <Line data={chartData} options={chartOptions}/> */}
    <canvas ref={chartRef3} width="100%" height="120" className="chartRef"></canvas>
  </div>
</div>
    </div>
  </div>
</div>
<div className='container card_container'>
  <div className='row'>
    <div className='col-md-6'>
    <div className="card col_md_6_card" >
      <div className='card-header' style={{color:'#fff'}}>
      Customers
      </div>
      <div className="card-body">
      <table className="table align-middle mb-0 ">
  <thead  style={{backgroundColor:"#2B3547",color:"#495365"}}>
    <tr>
      <th>Name</th>
      <th>Eamil</th>
      <th>Spent</th>
      <th>Country</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width:"45px",height:"45px"}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
         
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">john.doe@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$2000</p>
      </td>
      <td> <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width:"45px",height:"45px"}}
              className="rounded-circle"
              /></td>
      
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
          
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">alex.ray@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$3000</p>
      </td>
      <td> <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              /></td>
      <td>
      
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
          
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">kate.hunington@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$4000</p>
      </td>
      <td>  <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              /></td>
      <td>
      
      </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  
    </div>
    <div className='col-md-6'>
    <div className="card col_md_6_card">
      <div className='card-header' style={{color:'#fff'}}>
      Customers
      </div>
      <div className="card-body">
      <table className="table align-middle mb-0 ">
  <thead  style={{backgroundColor:"#2B3547",color:"#495365"}}>
    <tr>
      <th>Name</th>
      <th>Eamil</th>
      <th>Spent</th>
      <th>Country</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width:"45px",height:"45px"}}
              className="rounded-circle"
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">John Doe</p>
         
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">john.doe@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$2000</p>
      </td>
      <td> <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{width:"45px",height:"45px"}}
              className="rounded-circle"
              /></td>
      
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Alex Ray</p>
          
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">alex.ray@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$3000</p>
      </td>
      <td> <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              /></td>
      <td>
      
      </td>
    </tr>
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              />
          <div className="ms-3">
            <p className="fw-bold mb-1">Kate Hunington</p>
          
          </div>
        </div>
      </td>
      <td>
      <p className="text-muted mb-0">kate.hunington@gmail.com</p>
      </td>
      <td>
      <p className="text-muted mb-0">$4000</p>
      </td>
      <td>  <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              className="rounded-circle"
              alt=""
              style={{width:"45px",height:"45px"}}
              /></td>
      <td>
      
      </td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  
    </div>
  </div>
</div>
   </div>
  )
}

export default dashboardContent