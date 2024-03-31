import '../styles/faqs.css'

const Faqs = () => {
  return (
    <div className='container'>
      <div className="accordion w-100" id="basicAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basicAccordionCollapseOne"
            aria-expanded="false"
            aria-controls="basicAccordionCollapseOne"
          >
            Question #1
          </button>
        </h2>
        <div
          id="basicAccordionCollapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#basicAccordion"
        >
          <div className="accordion-body">
            <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deleniti modi neque, saepe excepturi ea iusto pariatur quod adipisci quos!</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basicAccordionCollapseTwo"
            aria-expanded="false"
            aria-controls="basicAccordionCollapseTwo"
          >
            Question #2
          </button>
        </h2>
        <div
          id="basicAccordionCollapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#basicAccordion"
        >
          <div className="accordion-body">
          <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deleniti modi neque, saepe excepturi ea iusto pariatur quod adipisci quos!</strong>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#basicAccordionCollapseThree"
            aria-expanded="false"
            aria-controls="basicAccordionCollapseThree"
          >
            Question #3
          </button>
        </h2>
        <div
          id="basicAccordionCollapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#basicAccordion"
        >
          <div className="accordion-body" >
          <strong>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deleniti modi neque, saepe excepturi ea iusto pariatur quod adipisci quos!</strong>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Faqs;
