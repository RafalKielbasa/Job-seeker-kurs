import { PlusIcon } from 'src/components/Icons'

import './Details.css'

const ApplyJobForm = () => {
  return (
    <div className='Apply-job-form'>
      <div>Apply for this job </div>
      <div className='Form-content'>
        <div className='Form-input'>
          <div>Full name</div>
          <input type='text' placeholder='Your first name and surname' />
        </div>
        <div className='Form-input'>
          <div>Your e-mail</div>
          <input type='text' placeholder='johndoe@example.com' />
        </div>
        <div className='Form-input'>
          <div>Your LinkedIn profile</div>
          <input type='text' placeholder='https://pl.linkedin.com/' />
        </div>
        <div className='File-input'>
          <div>Choose your CV file</div>
          <div>
            <div className='Round-wrapper'>
              <PlusIcon />
            </div>
            <div>
              <span>Click to add a file</span>
              <span> 4mb max</span>
            </div>
          </div>
        </div>
        <div className='Form-input'>
          <div>Your Github</div>
          <input type='text' placeholder='https://github.com/' />
        </div>
      </div>
      <div className='Check-box'>
        <input type='checkbox' />
        <span>Create an account</span>
      </div>
      <div className='Check-box'>
        <input type='checkbox' />
        <span>
          I accept <span>terms and conditions</span>
        </span>
      </div>
      <button className='Apply-button'>Apply now!</button>
    </div>
  )
}

export default ApplyJobForm
