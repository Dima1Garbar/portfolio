import { useState } from "react"
import "../styles/Resume.css"
import Button from './Button'
import Modal from "./Modal"
import School from "./School"
import University from "./University"
import Monitoring from "./Monitoring"
import Migration from "./Migration"

const Resume = () => {

  const [selectButton, setSelectButton] = useState(0);
  const [modal, setModal] = useState(false);

  if (selectButton == 1){
    var isSchool = true;
  }
  else if (selectButton == 3){
    var isUniversity = true ;
  }
  else if (selectButton == 2){
    var isMonitoring = true ;
  }
  else if (selectButton == 4){
    var isMigration = true ;
  }

  function getData (data) {
    setSelectButton(data.id);
    setModal(true);
  }


  return (
    <div className='resume_page'>
        <div className='first_row'>
            <div className='detail left_top_block info_top'>
              <div className='more_image image_school'></div>
              <p className='text_left_top_block'><span className="letychiv">Letychiv</span> Lyceum №1</p>
              <Button style_Button="more_info" id="1" proops={getData}/>
            </div>
            <div className='detail  right_top_block info_top'>
              <div className='more_image image_greengeeks'></div>
              <p className='text_right_top_block'>Monitoring/Abuse <span className='word_Technician'>Technician</span></p>
              <Button style_Button="more_info" id="2" proops={getData}/>
            </div>
          </div>
          
          <div className='row_of_path'>
            <div className='points points_1'></div>
            <div className='points points_2'></div>
            <div className='points points_3'></div>
            <div className='points points_4'></div>
          </div>
          <div className='second_row'>
            <div className='detail left_bottom_block info_bottom'>
              <Button style_Button="reverse" id="3" proops={getData} />
              <p className='text_left_bottom_block'>Vasyl' Stus Donetsk National University</p>
              <div className='more_image image_university'></div>
            </div>
            <div className='detail right_bottom_block info_bottom'>
              <Button style_Button="reverse" id="4" proops={getData}/>
              <p className='text_right_bottom_block'>Migration Technician</p>
              <div className='more_image image_greengeeks_reverse'></div>
            </div>
            {isSchool && <Modal visible={modal} setVisible={setModal}><School/></Modal>}
            {isUniversity && <Modal visible={modal} setVisible={setModal}><University/></Modal>}
            {isMonitoring && <Modal visible={modal} setVisible={setModal}><Monitoring/></Modal>}
            {isMigration && <Modal visible={modal} setVisible={setModal}><Migration/></Modal>}

          </div>
    </div>
  )
}

export default Resume
