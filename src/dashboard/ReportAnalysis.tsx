import { useState,useEffect,useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the styles
import '../styles/ReportAnalysis.css';
import Chart from 'chart.js/auto'; 


const ReportAnalysis = () => {
  const [startDate, setStartDate] = useState(new Date()); // Default to the current date
  const [endDate, setEndDate] = useState(new Date()); // Default to the current date
  const chartRef = useRef<HTMLCanvasElement | null>(null);
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

  const generateLabels = () => {
    return dataPoints.map((_) => ``);
  };

  const generateData = () => {
    return dataPoints.map((dataPoint) => dataPoint.y);
  };

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: '',
        data: generateData(),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
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
  return (
    <div className='container analysis-container'>
      <div className="row">
        <div className="col">
          <h4 className='analysis-title'>Reporting and Analytics</h4>
        </div>
      </div>
      <div className='container report-container'>
        <div className="row">
          <div className="col">
            <h4 className='report-title'>Generate Customer Report</h4>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col cols">
            <div className="mb-1">
              <label htmlFor="startDate" className="form-label">Start Date:</label>
              <br/>
              <DatePicker
                selected={startDate}
                onChange={(date:any) => setStartDate(date)}
                className="date"
                id="startDate"
              />
            </div>
           
            <div className="mb-1">
              <label htmlFor="endDate" className="form-label">End Date:</label>
              <br/>
              <DatePicker
                selected={endDate}
                onChange={(date:any) => setEndDate(date)}
                className="date"
                id="endDate"
              />
            </div>
           
            <div className="mb-1">
              <label htmlFor="userFilter" className="form-label">User Filter:</label>
              <input type="text" className="form-control" id="userFilter" />
            </div>
            <div className="mb-1">
              <label htmlFor="postTypeFilter" className="form-label">Post Type Filter:</label>
              <input type="text" className="form-control" id="postTypeFilter" />
            </div>
            <div className='mb-4'>
              <button type="button" className="btn Submit-button"><span>Generate Report</span></button>
            </div>
          </div>
        </div>
      </div>
      <div className='container dashboard-analytics-container'>
      <div className="row">
          <div className="col">
            <h4 className='report-title mt-3'>Analytics Dashboard</h4>
          </div>
        </div>
        <div className='row'>
            <div className='col'>
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
  
  </div>
   <canvas ref={chartRef} width="100%" height="0px"></canvas>
</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReportAnalysis;
