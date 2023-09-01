import { Form, Formik } from 'formik';
import Icon from '../../components/Icon/Icon';
import './Calculate.scss';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import { formValidation } from '../../validation/formValidation';
import { useState } from 'react';
import Result from './components/Result';

export default function Calculate() {
  const [sum, setSum] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const progress = [
    { id: 1, name: 'Ev Enerjisi', icon: 'plug', status: 1, },
    { id: 2, name: 'Alışveriş', icon: 'shop', status: 0, },
    { id: 3, name: 'Ulaşım', icon: 'car', status: 0, },
    { id: 4, name: 'Gıda', icon: 'utensils', status: 0, },
    { id: 5, name: 'Sonuçlar', icon: 'graph', status: 0, },
  ];

  return (
    <Formik
      initialValues={{
        step: 1,
        lastStep: 4,

        //step1
        housing1: '',
        housing2: '',
        housing3: '',
        housing4: '',
        housing5: '',
        housing6: '',
        housing7: '',
        housing8: '',
        housing9: '',
        housing10: '',
        housing11: '',



        //step2
        shop1: '',
        shop2: '',
        shop3: '',
        shop4: '',
        shop5: '',
        shop6: '',
        shop7: '',
        shop8: '',
        shop9: '',
        shop10: '',


        //step3
        transportation1: '',
        transportation2: '',
        transportation3: '',

        //step4
        food1: '',
        food2: '',
        food3: '',
        food4: '',

        //step2
      }}
      onSubmit={(e) => {

        const cloned: any = e;
        delete cloned.step;
        delete cloned.lastStep;

        const sum: any = Object.values(cloned).reduce((partialSum: any, a: any) => partialSum + parseInt(a!), 0)
        setSum(sum)
      }}
      validationSchema={formValidation}
    >
      {({ setFieldValue, values, isValid, dirty }) => {

        const prevHandle = () => {

          setFieldValue('step', values.step - 1)
        }

        const nextHandle = () => {
          setFieldValue('step', values.step + 1)

        }



        return (
          <div className="calculate-wrapper">
            <Form>
              <div className="container">
                <div className="calculate">
                  <div className="progress">
                    {progress.map((item, index) => {
                      return (
                        <div className={`item ${index + 1 == values.step ? 'active' : 'disabled'}`} key={index}>
                          <div className="icon-wrapper">
                            <Icon id={item.icon} />
                          </div>
                          <h5>{item.name}</h5>
                        </div>
                      )
                    })}

                  </div>
                  <div className="content">
                    <div className="left">

                    </div>
                    <div className="right">
                      {values.step == 1 && <StepOne />}
                      {values.step == 2 && <StepTwo />}
                      {values.step == 3 && <StepThree />}
                      {values.step == 4 && <StepFour />}
                      {showResult && <Result result={sum} />}
                      <div className="form-button">

                        {values.step > 1 && (
                          <button type="submit" className="custom-button fill" onClick={() => {
                            prevHandle()
                          }}>Geri</button>
                        ) || <div />}
                        {values.step === values.lastStep && (
                          <button type="submit" className="custom-button fill" onClick={() => {
                            setShowResult(true);
                          }}>Gonder</button>
                        ) || (
                            <button type="submit" className="custom-button fill" disabled={!isValid || !dirty} onClick={nextHandle}>İlerle</button>
                          )}

                      </div>
                    </div>
                  </div>
                </div>
              </div >

            </Form>
          </div>
        )
      }}

    </Formik>



  )
}
