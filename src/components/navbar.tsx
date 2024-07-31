import { CustomButton } from '../Buttons/buttons';

const Navbar = () => {
  return (
    <div>
        <div className='flex justify-between mx-24 my-10'>
            <div className='flex gap-12'>
                <a href="" target="_blank">Shortly</a>
                <a href="" target="_blank">Features</a>
                <a href="" target="_blank">Pricing</a>
                <a href="" target="_blank">Resources</a>
            </div>

            <div className='flex'>
              <CustomButton variant='primary'>Login</CustomButton>
              <CustomButton variant='secondary'>Get Started</CustomButton>
            </div>
        </div>
    </div>
  )
}

export default Navbar;